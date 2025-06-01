
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Save } from "lucide-react";

interface Transaction {
  id?: number;
  description: string;
  amount: number;
  date: string;
  type: string;
  category?: string;
  client?: string;
  notes?: string;
}

interface TransactionFormProps {
  transaction?: Transaction;
  onSave: (transaction: Transaction) => void;
  onCancel: () => void;
}

const TransactionForm = ({ transaction, onSave, onCancel }: TransactionFormProps) => {
  const [formData, setFormData] = useState<Transaction>({
    description: transaction?.description || "",
    amount: transaction?.amount || 0,
    date: transaction?.date || new Date().toISOString().split('T')[0],
    type: transaction?.type || "income",
    category: transaction?.category || "",
    client: transaction?.client || "",
    notes: transaction?.notes || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      amount: formData.type === 'expense' ? -Math.abs(formData.amount) : Math.abs(formData.amount),
      id: transaction?.id || Date.now()
    });
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-foreground">
          {transaction ? 'Editar Transação' : 'Nova Transação'}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onCancel}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground font-medium">Descrição *</Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-foreground font-medium">Valor *</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                value={Math.abs(formData.amount)}
                onChange={(e) => setFormData(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type" className="text-foreground font-medium">Tipo *</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                <SelectTrigger className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="income" className="text-foreground hover:bg-emerald-50">Receita</SelectItem>
                  <SelectItem value="expense" className="text-foreground hover:bg-coral-50">Despesa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground font-medium">Data *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-foreground font-medium">Categoria</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {formData.type === 'income' ? (
                    <>
                      <SelectItem value="honorarios" className="text-foreground hover:bg-emerald-50">Honorários</SelectItem>
                      <SelectItem value="consultoria" className="text-foreground hover:bg-emerald-50">Consultoria</SelectItem>
                      <SelectItem value="outros_receitas" className="text-foreground hover:bg-emerald-50">Outras Receitas</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="aluguel" className="text-foreground hover:bg-coral-50">Aluguel</SelectItem>
                      <SelectItem value="salarios" className="text-foreground hover:bg-coral-50">Salários</SelectItem>
                      <SelectItem value="material" className="text-foreground hover:bg-coral-50">Material de Escritório</SelectItem>
                      <SelectItem value="outros_despesas" className="text-foreground hover:bg-coral-50">Outras Despesas</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="client" className="text-foreground font-medium">Cliente (se aplicável)</Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-foreground font-medium">Observações</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              rows={3}
              className="bg-background border-border text-foreground focus:ring-gold-500 focus:border-gold-500"
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
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

export default TransactionForm;
