
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Save } from "lucide-react";

interface Event {
  id?: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  client: string;
  description?: string;
}

interface EventFormProps {
  event?: Event;
  onSave: (event: Event) => void;
  onCancel: () => void;
}

const EventForm = ({ event, onSave, onCancel }: EventFormProps) => {
  const [formData, setFormData] = useState<Event>({
    title: event?.title || "",
    date: event?.date || "",
    time: event?.time || "",
    location: event?.location || "",
    type: event?.type || "meeting",
    client: event?.client || "",
    description: event?.description || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: event?.id || Date.now()
    });
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-foreground">
          {event ? 'Editar Evento' : 'Novo Evento'}
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
              <Label htmlFor="date" className="text-foreground">Data *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground">Horário *</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                required
                className="bg-background border-border text-foreground focus:ring-gold-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type" className="text-foreground">Tipo</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="hearing">Audiência</SelectItem>
                  <SelectItem value="meeting">Reunião</SelectItem>
                  <SelectItem value="deadline">Prazo</SelectItem>
                  <SelectItem value="appointment">Consulta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="text-foreground">Local *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                required
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

export default EventForm;
