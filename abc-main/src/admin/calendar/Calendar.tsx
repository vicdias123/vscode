
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Plus,
  User,
  Edit,
  Trash2
} from "lucide-react";
import EventForm from "@/components/EventForm";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  client: string;
  description?: string;
}

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | undefined>();
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Audiência - João Silva",
      date: "2024-01-20",
      time: "14:00",
      location: "Fórum Central",
      type: "hearing",
      client: "João Silva",
      description: "Audiência de conciliação"
    },
    {
      id: 2,
      title: "Reunião - Maria Santos",
      date: "2024-01-22",
      time: "10:00",
      location: "Escritório",
      type: "meeting",
      client: "Maria Santos",
      description: "Reunião para discussão do caso"
    }
  ]);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "hearing":
        return "border-primary";
      case "meeting":
        return "border-primary";
      case "deadline":
        return "border-orange-600";
      case "appointment":
        return "border-blue-600";
      default:
        return "border-primary";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "hearing":
        return "Audiência";
      case "meeting":
        return "Reunião";
      case "deadline":
        return "Prazo";
      case "appointment":
        return "Consulta";
      default:
        return "Evento";
    }
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === selectedDate.toDateString();
  });

  const handleNewEvent = () => {
    setEditingEvent(undefined);
    setShowForm(true);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleDeleteEvent = (eventId: number) => {
    if (confirm('Tem certeza que deseja excluir este evento?')) {
      setEvents(prev => prev.filter(event => event.id !== eventId));
    }
  };

  const handleSaveEvent = (eventData: Event) => {
    if (editingEvent) {
      setEvents(prev => prev.map(event => 
        event.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : event
      ));
    } else {
      setEvents(prev => [...prev, { ...eventData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingEvent(undefined);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingEvent(undefined);
  };

  if (showForm) {
    return (
      <div className="p-6 bg-background min-h-screen">
        <EventForm
          event={editingEvent}
          onSave={handleSaveEvent}
          onCancel={handleCancelForm}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleNewEvent}
        >
          <Plus className="h-5 w-5 mr-2" />
          Novo Evento
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <CalendarIcon className="h-5 w-5 text-gold-600" />
              Calendário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => {
                if (newDate) {
                  setDate(newDate);
                  setSelectedDate(newDate);
                }
              }}
              className="rounded-md border border-border"
            />
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">
              Eventos para {selectedDate.toLocaleDateString('pt-BR')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div 
                  key={event.id} 
                  className={`p-4 rounded-lg border-2 bg-muted ${getEventTypeColor(event.type)}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                      <div className="mt-2 space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gold-600" />
                          <span className="text-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gold-600" />
                          <span className="text-foreground">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gold-600" />
                          <span className="text-foreground">{event.client}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {getEventTypeLabel(event.type)}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditEvent(event)}
                        className="h-8 w-8 text-gold-600 hover:text-gold-700 hover:bg-gold-100"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteEvent(event.id)}
                        className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                Nenhum evento para esta data
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarPage;
