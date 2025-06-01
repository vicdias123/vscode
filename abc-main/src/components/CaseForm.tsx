
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Save } from "lucide-react";

interface Case {
  id?: number;
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

interface CaseFormProps {
  caseData?: Case;
  onSave: (caseData: Case) => void;
  onCancel: () => void;
}

const CaseForm = ({ caseData, onSave, onCancel }: CaseFormProps) => {
  const [formData, setFormData] = useState<Case>({
    number: caseData?.number || "",
    title: caseData?.title || "",
    client: caseData?.client || "",
    lawyer: caseData?.lawyer || "",
    status: caseData?.status || "Em andamento",
    lastUpdate: caseData?.lastUpdate || new Date().toISOString().split('T')[0],
    nextHearing: caseData?.nextHearing || "",
    description: caseData?.description || "",
    court: caseData?.court || "",
    amount: caseData?.amount || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: caseData?.id || Date.now()
    });
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-foreground">
          {caseData ? 'Editar Processo' : 'Novo Processo'}
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
              <Label htmlFor="number" className="text-foreground">Número do Processo *</Label>
              <Input
                id="number"
                value={formData.number}
                onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                placeholder="0000000-00.0000.0.00.0000"
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground">Título *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client" className="text-foreground">Cliente *</Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lawyer" className="text-foreground">Advogado Responsável *</Label>
              <Input
                id="lawyer"
                value={formData.lawyer}
                onChange={(e) => setFormData(prev => ({ ...prev, lawyer: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status" className="text-foreground">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="Em andamento">Em andamento</SelectItem>
                  <SelectItem value="Aguardando">Aguardando</SelectItem>
                  <SelectItem value="Finalizado">Finalizado</SelectItem>
                  <SelectItem value="Suspenso">Suspenso</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="court" className="text-foreground">Tribunal/Vara</Label>
              <Input
                id="court"
                value={formData.court}
                onChange={(e) => setFormData(prev => ({ ...prev, court: e.target.value }))}
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nextHearing" className="text-foreground">Próxima Audiência</Label>
              <Input
                id="nextHearing"
                type="date"
                value={formData.nextHearing}
                onChange={(e) => setFormData(prev => ({ ...prev, nextHearing: e.target.value }))}
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-foreground">Valor da Causa</Label>
              <Input
                id="amount"
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                placeholder="R$ 0,00"
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
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

export default CaseForm;
