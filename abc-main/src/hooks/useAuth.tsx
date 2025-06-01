import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'lawyer' | 'client';
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: AuthError | Error | null }>;
  signUp: (email: string, password: string, name: string, role?: string) => Promise<{ error?: AuthError | Error | null }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchProfile = async (userId: string) => {
    try {
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        setProfile(null);
        setIsAuthenticated(false);
        // Se não conseguir carregar perfil, deslogar
        await supabase.auth.signOut();
        return false;
      }

      if (profileData) {
        // Validar role
        const validRoles = ['admin', 'lawyer', 'client'];
        if (!validRoles.includes(profileData.role)) {
          console.error('Role inválido:', profileData.role);
          setProfile(null);
          setIsAuthenticated(false);
          await supabase.auth.signOut();
          return false;
        }

        const typedProfile: Profile = {
          id: profileData.id,
          email: profileData.email,
          name: profileData.name,
          role: profileData.role as 'admin' | 'lawyer' | 'client',
          phone: profileData.phone
        };
        setProfile(typedProfile);
        setIsAuthenticated(true);
        return true;
      } else {
        setProfile(null);
        setIsAuthenticated(false);
        await supabase.auth.signOut();
        return false;
      }
    } catch (error) {
      console.error('Error in fetchProfile:', error);
      setProfile(null);
      setIsAuthenticated(false);
      await supabase.auth.signOut();
      return false;
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
          setIsAuthenticated(false);
        }
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error: signInError, data: signInData } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        // Mensagens específicas para erros comuns
        if (signInError.message.includes('Email not confirmed')) {
          return { error: new Error('E-mail não confirmado. Verifique sua caixa de entrada.') };
        }
        if (signInError.message.includes('Invalid login credentials')) {
          return { error: new Error('E-mail ou senha incorretos.') };
        }
        if (signInError.message.includes('User disabled')) {
          return { error: new Error('Conta desabilitada. Contate o suporte.') };
        }
        return { error: signInError };
      }

      // Busca o perfil
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email)
        .maybeSingle();

      if (profileError || !profileData) {
        // Não faz logout automático para evitar loop
        return { error: new Error('Perfil não encontrado ou inválido.') };
      }

      return { error: null };
    } catch (error) {
      console.error('Error in signIn:', error);
      return { error: error as Error };
    }
  };

  const signUp = async (email: string, password: string, name: string, role: string = 'client') => {
    try {
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role
          }
        }
      });

      if (signUpError) return { error: signUpError };

      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              email,
              name,
              role,
              created_at: new Date().toISOString()
            }
          ]);

        if (profileError) {
          return { error: profileError };
        }
      }

      return { error: null };
    } catch (error) {
      console.error('Error in signUp:', error);
      return { error: error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      profile,
      loading,
      signIn,
      signUp,
      signOut,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};