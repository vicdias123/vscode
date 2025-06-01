import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, FileText, DollarSign, Calendar, 
  Bell, CheckSquare, PhoneCall, BarChart, 
  PieChart, UserCheck, TrendingUp, Star 
} from "lucide-react";

const Dashboard = () => {
  // State para forçar re-render
  const [refreshKey, setRefreshKey] = useState(0);
  
  // Mock data - Replace with real data from your backend
  const [stats, setStats] = useState({
    activeClients: 156,
    ongoingCases: 89,
    monthlyRevenue: 125000,
    upcomingDeadlines: 12,
    pendingTasks: 24,
    newContacts: 8
  });

  // Simular atualização automática dos dados
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        activeClients: prevStats.activeClients + Math.floor(Math.random() * 3),
        newContacts: prevStats.newContacts + Math.floor(Math.random() * 2),
        monthlyRevenue: prevStats.monthlyRevenue + Math.floor(Math.random() * 1000)
      }));
      setRefreshKey(prev => prev + 1);
    }, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen" key={refreshKey}>
      <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      
      {/* KPIs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-scale bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Clientes Ativos</p>
                <h3 className="text-2xl font-bold text-foreground">{stats.activeClients}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Processos em Andamento</p>
                <h3 className="text-2xl font-bold text-foreground">{stats.ongoingCases}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Receita Mensal</p>
                <h3 className="text-2xl font-bold text-foreground">
                  R$ {stats.monthlyRevenue.toLocaleString()}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Próximos Vencimentos</p>
                <h3 className="text-2xl font-bold text-foreground">{stats.upcomingDeadlines}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <CheckSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Tarefas Pendentes</p>
                <h3 className="text-2xl font-bold text-foreground">{stats.pendingTasks}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Novos Contatos</p>
                <h3 className="text-2xl font-bold text-foreground">{stats.newContacts}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Processos por Status</h3>
              <BarChart className="h-5 w-5 text-primary" />
            </div>
            <div className="h-64 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              Gráfico de Processos por Status
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Receita por Área</h3>
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <div className="h-64 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              Gráfico de Receita por Área
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Desempenho por Advogado</h3>
              <UserCheck className="h-5 w-5 text-primary" />
            </div>
            <div className="h-64 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              Gráfico de Desempenho por Advogado
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Satisfação dos Clientes</h3>
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div className="h-64 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              Gráfico de Satisfação dos Clientes
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Feed */}
      <Card className="bg-card border-primary">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Atividades Recentes</h3>
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-4">
            {/* Exemplo de item de atividade - repita conforme necessário */}
            <div className="flex p-4 bg-primary/10 rounded-lg">
              <div className="flex-shrink-0">
                <CheckSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-foreground">
                  A tarefa "Revisar contrato" foi marcada como concluída.
                </p>
                <p className="text-xs text-muted-foreground">Há 10 minutos</p>
              </div>
            </div>

            <div className="flex p-4 bg-primary/10 rounded-lg">
              <div className="flex-shrink-0">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-foreground">
                  Novo contato adicionado: João da Silva.
                </p>
                <p className="text-xs text-muted-foreground">Há 30 minutos</p>
              </div>
            </div>

            <div className="flex p-4 bg-primary/10 rounded-lg">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-foreground">
                  Receita mensal atualizada: R$ 125.000,00.
                </p>
                <p className="text-xs text-muted-foreground">Há 1 hora</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
