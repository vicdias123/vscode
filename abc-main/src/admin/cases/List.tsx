
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Search, 
  Edit, 
  Trash2, 
  Calendar,
  User,
  Circle,
  Plus
} from "lucide-react";
import CaseForm from "@/components/CaseForm";

interface Case {
  id: number;
  number: string;
  title: string;
  client: string;
  lawyer: string;
  status: string;
  lastUpdate: string;
  nextHearing: string;
  description?: string;
  court?: string;
  amount?: string;
}

const CasesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCase, setEditingCase] = useState<Case | undefined>();
  const [cases, setCases] = useState<Case[]>([
    {
      id: 1,
      number: "0001234-56.2023.8.26.0100",
      title: "Ação de Cobrança",
      client: "João Silva",
      lawyer: "Dr. Carlos Santos",
      status: "Em andamento",
      lastUpdate: "2023-12-15",
      nextHearing: "2024-01-20",
      description: "Cobrança de honorários advocatícios",
      court: "1ª Vara Cível",
      amount: "R$ 50.000,00"
    },
    {
      id: 2,
      number: "0002345-67.2023.8.26.0100",
      title: "Ação Trabalhista",
      client: "Maria Santos",
      lawyer: "Dra. Ana Paula",
      status: "Aguardando",
      lastUpdate: "2023-12-10",
      nextHearing: "2024-02-05",
      description: "Reclamação trabalhista por verbas rescisórias",
      court: "2ª Vara do Trabalho",
      amount: "R$ 25.000,00"
    }
  ]);

  const filteredCases = cases.filter(caseItem =>
    caseItem.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento":
        return "text-blue-600";
      case "Aguardando":
        return "text-orange-600";
      case "Finalizado":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const handleEdit = (caseData: Case) => {
    setEditingCase(caseData);
    setShowForm(true);
  };

  const handleDelete = (caseId: number) => {
    if (confirm('Tem certeza que deseja excluir este processo?')) {
      setCases(prev => prev.filter(caseItem => caseItem.id !== caseId));
    }
  };

  const handleNewCase = () => {
    setEditingCase(undefined);
    setShowForm(true);
  };

  const handleSaveCase = (caseData: Case) => {
    if (editingCase) {
      setCases(prev => prev.map(caseItem => 
        caseItem.id === editingCase.id ? { ...caseData, id: editingCase.id } : caseItem
      ));
    } else {
      setCases(prev => [...prev, { ...caseData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingCase(undefined);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingCase(undefined);
  };

  if (showForm) {
    return (
      <div className="p-6 bg-background min-h-screen">
        <CaseForm
          caseData={editingCase}
          onSave={handleSaveCase}
          onCancel={handleCancelForm}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Processos</h1>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleNewCase}
        >
          <Plus className="h-5 w-5 mr-2" />
          Novo Processo
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
          <Input
            placeholder="Buscar por número, título, cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border text-foreground focus:ring-gold-500"
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-x-auto border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-foreground">Número</TableHead>
              <TableHead className="text-foreground">Título</TableHead>
              <TableHead className="text-foreground">Cliente</TableHead>
              <TableHead className="text-foreground">Advogado</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-foreground">Próxima Audiência</TableHead>
              <TableHead className="text-right text-foreground">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCases.map((caseItem) => (
              <TableRow key={caseItem.id} className="border-border">
                <TableCell className="font-medium text-foreground">{caseItem.number}</TableCell>
                <TableCell className="text-foreground">{caseItem.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-coral-600" />
                    <span className="text-foreground">{caseItem.client}</span>
                  </div>
                </TableCell>
                <TableCell className="text-foreground">{caseItem.lawyer}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Circle className={`h-3 w-3 ${getStatusColor(caseItem.status)}`} />
                    <span className="text-foreground">{caseItem.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-600" />
                    <span className="text-foreground">
                      {caseItem.nextHearing ? new Date(caseItem.nextHearing).toLocaleDateString('pt-BR') : 'N/A'}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleEdit(caseItem)}
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(caseItem.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CasesList;
