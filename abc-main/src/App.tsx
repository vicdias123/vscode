import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import HockeyProject from "./pages/HockeyProject";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Metodologia from "./pages/Metodologia";
import ProcessoJuridico from "./pages/ProcessoJuridico";
import PorQueEscolher from "./pages/PorQueEscolher";
import CasoCriminal from "./pages/CasoCriminal";
import CasoCivil from "./pages/CasoCivil";
import CasoConsultoria from "./pages/CasoConsultoria";
import CasoTrabalhista from "./pages/CasoTrabalhista";
import CasoPrevidenciario from "./pages/CasoPrevidenciario";
import Carreiras from "./pages/Carreiras";

// Importações da área administrativa
import Auth from "./auth/Auth";
import AdminLayout from "./admin/Layout";
import Dashboard from "./admin/Dashboard";
import ClientsList from "./admin/clients/List";
import CasesList from "./admin/cases/List";
import Calendar from "./admin/calendar/Calendar";
import Financial from "./admin/financial/Financial";
import Settings from "./admin/settings/Settings";
import AdminKanbanPage from "./pages/AdminKanbanPage"; // Import Kanban Page
import ClientArea from "./client/ClientArea";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<Index />} />            <Route path="/projects/hockey" element={<HockeyProject />} />            {/* Casos de Sucesso - Legal Case Studies */}
            <Route path="/casos/previdenciario" element={<CasoPrevidenciario />} />
            <Route path="/casos/criminal" element={<CasoCriminal />} />
            <Route path="/casos/civil" element={<CasoCivil />} />
            <Route path="/casos/consultoria" element={<CasoConsultoria />} />
            <Route path="/casos/trabalhista" element={<CasoTrabalhista />} />
            <Route path="/about" element={<About />} />            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/noticias" element={<Blog />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/processo-juridico" element={<ProcessoJuridico />} />
            <Route path="/por-que-escolher" element={<PorQueEscolher />} />
            <Route path="/carreiras" element={<Carreiras />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
              {/* Autenticação */}
            <Route path="/login" element={<Auth />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            
            {/* Área do Cliente */}
            <Route path="/client-area" element={
              <ProtectedRoute>
                <ClientArea />
              </ProtectedRoute>
            } />
           
           {/* Área Administrativa */}
            <Route path="/admin" element={
              <ProtectedRoute adminOnly>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="clients" element={<ClientsList />} />
              <Route path="cases" element={<CasesList />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="financial" element={<Financial />} />
              <Route path="settings" element={<Settings />} />
              <Route path="kanban" element={<AdminKanbanPage />} /> {/* Add Kanban Route */}
            </Route>
           
            {/* Rota legada do admin dashboard */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
           
           {/* Páginas de erro */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />          </Routes>
         </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
