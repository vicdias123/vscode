
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Users, FileText, Calendar, 
  DollarSign, Settings, Menu, X, LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "Clientes", path: "/admin/clients" },
    { icon: FileText, label: "Processos", path: "/admin/cases" },
    { icon: Calendar, label: "Agenda", path: "/admin/calendar" },
    { icon: DollarSign, label: "Financeiro", path: "/admin/financial" },
    { icon: Settings, label: "Configurações", path: "/admin/settings" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden text-foreground"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-card shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 border-r border-border",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <h1 className="text-2xl font-bold text-foreground">Escritório</h1>
            <p className="text-sm text-muted-foreground">Sistema Jurídico</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleMenuClick(item.path)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  location.pathname === item.path 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-primary/20"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-semibold text-primary-foreground">
                  {profile?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{profile?.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{profile?.role}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start hover:bg-red-50 text-red-600"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen transition-all duration-200 ease-in-out",
          sidebarOpen ? "lg:ml-64" : "lg:ml-0"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
