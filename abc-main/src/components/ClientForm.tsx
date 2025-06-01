import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Save } from "lucide-react";

interface Client {
  id?: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  status: string;
  tags: string[];
  address?: string;
  notes?: string;
}

interface ClientFormProps {
  client?: Client;
  onSave: (client: Client) => Promise<void> | void;
  onCancel: () => void;
}

const ClientForm = ({ client, onSave, onCancel }: ClientFormProps) => {
  const [formData, setFormData] = useState<Client>({
    name: client?.name || "",
    document: client?.document || "",
    email: client?.email || "",
    phone: client?.phone || "",
    status: client?.status || "active",
    tags: client?.tags || [],
    address: client?.address || "",
    notes: client?.notes || ""
  });

  const [newTag, setNewTag] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newClient: Client = {
      ...formData,
      id: client?.id || Date.now().toString(),
    };
    await onSave(newClient);
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-foreground">
          {client ? 'Editar Cliente' : 'Novo Cliente'}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onCancel}
            className="text-coral-600 hover:bg-coral-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="document" className="text-foreground">CPF/CNPJ *</Label>
              <Input
                id="document"
                value={formData.document}
                onChange={(e) => setFormData(prev => ({ ...prev, document: e.target.value }))}
                required
                className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy-800">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-navy-800">Telefone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status" className="text-navy-800">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger className="bg-background border-gold-600 text-navy-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-gold-600">
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="text-navy-800">Endereço</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Tags</Label>
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Adicionar tag"
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
              <Button 
                type="button"
                onClick={addTag}
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Adicionar
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-xs cursor-pointer bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
                  onClick={() => removeTag(tag)}
                >
                  {tag}
                  <X className="h-3 w-3" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-foreground">Observações</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              rows={3}
              className="bg-background border-border text-foreground focus:ring-gold-500"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button 
              type="button"
              variant="outline"
              onClick={onCancel}
              className="border-border text-muted-foreground hover:bg-muted"
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ClientForm;
