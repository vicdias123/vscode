import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
  adminOnly?: boolean;
}

const VALID_ROLES = ['admin', 'lawyer', 'client'] as const;

const ProtectedRoute = ({ children, allowedRoles, adminOnly }: ProtectedRouteProps) => {
  const { user, profile, loading, isAuthenticated } = useAuth();
  const location = useLocation();
  const { toast } = useToast();
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  useEffect(() => {
    if (!loading) {
      setHasCheckedAuth(true);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && hasCheckedAuth) {
      if (!isAuthenticated || !user) {
        toast({
          title: "Acesso Negado",
          description: "Faça login para acessar esta área.",
          variant: "destructive",
        });
      } else if (!profile) {
        toast({
          title: "Erro de Perfil",
          description: "Perfil de usuário não encontrado. Faça login novamente.",
          variant: "destructive",
        });
      } else if (!VALID_ROLES.includes(profile.role)) {
        toast({
          title: "Acesso Inválido",
          description: "Perfil de usuário inválido. Contate o suporte.",
          variant: "destructive",
        });
      } else if (adminOnly && profile.role !== 'admin') {
        toast({
          title: "Acesso Restrito",
          description: "Esta área é restrita para administradores.",
          variant: "destructive",
        });
      } else if (allowedRoles && !allowedRoles.includes(profile.role)) {
        toast({
          title: "Acesso Negado",
          description: "Você não tem permissão para acessar esta área.",
          variant: "destructive",
        });
      }
    }
  }, [loading, hasCheckedAuth, isAuthenticated, user, profile, adminOnly, allowedRoles, toast]);

  // Loading state
  if (loading || !hasCheckedAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  // Critical security checks - múltiplas camadas de validação
  
  // 1. Usuário deve estar autenticado e ter um objeto user válido
  if (!isAuthenticated || !user) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  // 2. Perfil deve existir e ser válido
  if (!profile) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  // 3. Role deve ser válido (admin, lawyer ou client)
  if (!VALID_ROLES.includes(profile.role)) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  // 4. Verificação específica para área administrativa
  if (adminOnly && profile.role !== 'admin') {
    return <Navigate to="/unauthorized" replace />;
  }

  // 5. Verificação de roles permitidos
  if (allowedRoles && !allowedRoles.includes(profile.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Todas as validações passaram - permitir acesso
  return <>{children}</>;
};

export default ProtectedRoute;
