import { useEffect, useState } from "react";
import { supabase } from '@/integrations/supabase/client';
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
  UserPlus, 
  Search, 
  Edit, 
  Trash2, 
  Mail, 
  Phone,
  Tag,
  Circle
} from "lucide-react";
import ClientForm from "@/components/ClientForm";

interface Client {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  status: string; // stored as role in Supabase profiles
  tags: string[];
  address?: string;
  notes?: string;
}

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | undefined>();

  // Fetch clients from Supabase
  const fetchClients = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('profiles').select('id,name,email,phone,role');
    if (data) {
      setClients(data.map(p => ({
        id: p.id,
        name: p.name,
        document: '',
        email: p.email,
        phone: p.phone || '',
        status: p.role || 'active',
        tags: [],
        address: '',
        notes: ''
      })));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.document.includes(searchTerm) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600";
      case "inactive":
        return "text-gray-400";
      default:
        return "text-foreground";
    }
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setShowForm(true);
  };

  const handleDelete = async (clientId: string) => {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      setLoading(true);
      await supabase.from('profiles').delete().eq('id', clientId);
      await fetchClients();
      setLoading(false);
    }
  };

  const handleNewClient = () => {
    setEditingClient(undefined);
    setShowForm(true);
  };

  const handleSaveClient = async (clientData: Client) => {
    setLoading(true);
    if (editingClient) {
      await supabase.from('profiles').update({
        name: clientData.name,
        email: clientData.email,
        phone: clientData.phone,
        role: clientData.status
      }).eq('id', editingClient.id);
    } else {
      await supabase.from('profiles').insert([{ 
        id: clientData.id,
        name: clientData.name,
        email: clientData.email,
        phone: clientData.phone,
        role: clientData.status
      }]);
    }
    await fetchClients();
    setLoading(false);
    setShowForm(false);
    setEditingClient(undefined);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingClient(undefined);
  };

  if (loading) return <div>Carregando...</div>;

  if (showForm) {
    return (
      <div className="p-6 bg-background min-h-screen">
        <ClientForm
          client={editingClient}
          onSave={handleSaveClient}
          onCancel={() => { setShowForm(false); setEditingClient(undefined); }}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
        <Button 
          className="bg-gold-600 text-white hover:bg-gold-700"
          onClick={handleNewClient}
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Novo Cliente
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold-600" />
          <Input
            placeholder="Buscar por nome, CPF/CNPJ, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border text-foreground focus:ring-gold-500"
          />
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-x-auto bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-foreground">Nome</TableHead>
              <TableHead className="text-foreground">CPF/CNPJ</TableHead>
              <TableHead className="text-foreground">Contato</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-foreground">Tags</TableHead>
              <TableHead className="text-right text-foreground">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id} className="border-border">
                <TableCell className="font-medium text-foreground">{client.name}</TableCell>
                <TableCell className="text-foreground">{client.document}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-coral-600" />
                      <span className="text-sm text-foreground">{client.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-coral-600" />
                      <span className="text-sm text-foreground">{client.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Circle className={`h-3 w-3 ${getStatusColor(client.status)}`} />
                    <span className="text-foreground">
                      {client.status === "active" ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2 flex-wrap">
                    {client.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-teal-100 text-teal-700"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleEdit(client)}
                      className="hover:bg-gold-100 text-gold-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(client.id)}
                      className="hover:bg-red-50 text-red-600"
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

export default ClientList;
