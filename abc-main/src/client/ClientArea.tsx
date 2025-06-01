
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Calendar, 
  Download, 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  User,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";

const ClientArea = () => {
  const [message, setMessage] = useState("");
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    subject: "",
    description: ""
  });

  // Mock data do cliente
  const clientData = {
    name: "João Silva",
    email: "joao@email.com",
    phone: "(11) 99999-9999"
  };

  const processes = [
    {
      id: 1,
      number: "0001234-56.2023.8.26.0100",
      title: "Ação de Cobrança",
      status: "Em andamento",
      lastUpdate: "2023-12-15",
      nextHearing: "2024-01-20",
      description: "Processo de cobrança de honorários"
    },
    {
      id: 2,
      number: "0002345-67.2023.8.26.0100",
      title: "Consultoria Jurídica",
      status: "Finalizado",
      lastUpdate: "2023-11-30",
      nextHearing: null,
      description: "Consultoria sobre contratos comerciais"
    }
  ];

  const documents = [
    {
      id: 1,
      name: "Contrato de Prestação de Serviços.pdf",
      date: "2023-12-01",
      size: "245 KB",
      type: "Contrato"
    },
    {
      id: 2,
      name: "Petição Inicial.pdf",
      date: "2023-12-10",
      size: "512 KB",
      type: "Petição"
    }
  ];

  const messages = [
    {
      id: 1,
      from: "Dr. Carlos Santos",
      date: "2023-12-15",
      subject: "Atualização do Processo",
      content: "Olá João, gostaria de informar que houve uma atualização no seu processo..."
    },
    {
      id: 2,
      from: "Você",
      date: "2023-12-14",
      subject: "Dúvida sobre documentos",
      content: "Boa tarde, doutor. Tenho uma dúvida sobre os documentos necessários..."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento":
        return "#BE9161";
      case "Finalizado":
        return "#0F0C0F";
      case "Aguardando":
        return "#F4D29C";
      default:
        return "#BE9161";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Em andamento":
        return <Clock className="h-4 w-4" />;
      case "Finalizado":
        return <CheckCircle className="h-4 w-4" />;
      case "Aguardando":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Enviando mensagem:', message);
      alert('Mensagem enviada com sucesso!');
      setMessage("");
    }
  };

  const handleScheduleAppointment = () => {
    if (appointmentData.date && appointmentData.time && appointmentData.subject) {
      console.log('Agendando consulta:', appointmentData);
      alert('Consulta agendada com sucesso!');
      setAppointmentData({
        date: "",
        time: "",
        subject: "",
        description: ""
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleDownloadDocument = (docName: string) => {
    console.log('Baixando documento:', docName);
    alert(`Baixando ${docName}...`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Header */}
      <header className="shadow-sm border-b" style={{ backgroundColor: '#F5F1EB', borderColor: '#BE9161' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8" style={{ color: '#BE9161' }} />
              <span className="text-xl font-bold" style={{ color: '#0F0C0F' }}>Área do Cliente</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" style={{ color: '#BE9161' }} />
                <span style={{ color: '#BE9161' }}>Olá, {clientData.name}</span>
              </div>
              <Link to="/">
                <Button 
                  variant="outline"
                  style={{ borderColor: '#BE9161', color: '#BE9161' }}
                >
                  Voltar ao Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="processes" className="w-full">
          <TabsList 
            className="grid w-full grid-cols-4 mb-8"
            style={{ backgroundColor: '#F4D29C', borderColor: '#BE9161' }}
          >
            <TabsTrigger 
              value="processes"
              style={{ color: '#0F0C0F' }}
            >
              <FileText className="h-4 w-4 mr-2" />
              Meus Processos
            </TabsTrigger>
            <TabsTrigger 
              value="documents"
              style={{ color: '#0F0C0F' }}
            >
              <Download className="h-4 w-4 mr-2" />
              Documentos
            </TabsTrigger>
            <TabsTrigger 
              value="messages"
              style={{ color: '#0F0C0F' }}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Mensagens
            </TabsTrigger>
            <TabsTrigger 
              value="appointments"
              style={{ color: '#0F0C0F' }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Consulta
            </TabsTrigger>
          </TabsList>

          <TabsContent value="processes" className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#0F0C0F' }}>Meus Processos</h2>
            <div className="grid gap-6">
              {processes.map((process) => (
                <Card key={process.id} style={{ borderColor: '#BE9161', backgroundColor: '#F5F1EB' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div>
                        <h3 style={{ color: '#0F0C0F' }}>{process.title}</h3>
                        <p className="text-sm font-normal" style={{ color: '#BE9161' }}>
                          Processo nº {process.number}
                        </p>
                      </div>
                      <div className="flex items-center gap-2" style={{ color: getStatusColor(process.status) }}>
                        {getStatusIcon(process.status)}
                        <span>{process.status}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#0F0C0F' }}>{process.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span style={{ color: '#BE9161' }}>Última atualização: </span>
                        <span style={{ color: '#0F0C0F' }}>
                          {new Date(process.lastUpdate).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      {process.nextHearing && (
                        <div>
                          <span style={{ color: '#BE9161' }}>Próxima audiência: </span>
                          <span style={{ color: '#0F0C0F' }}>
                            {new Date(process.nextHearing).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#0F0C0F' }}>Meus Documentos</h2>
            <div className="grid gap-4">
              {documents.map((doc) => (
                <Card key={doc.id} style={{ borderColor: '#BE9161', backgroundColor: '#F5F1EB' }}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8" style={{ color: '#BE9161' }} />
                        <div>
                          <h4 className="font-semibold" style={{ color: '#0F0C0F' }}>{doc.name}</h4>
                          <div className="flex gap-4 text-sm" style={{ color: '#BE9161' }}>
                            <span>Tipo: {doc.type}</span>
                            <span>Data: {new Date(doc.date).toLocaleDateString('pt-BR')}</span>
                            <span>Tamanho: {doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDownloadDocument(doc.name)}
                        style={{ backgroundColor: '#BE9161', color: '#F5F1EB' }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#0F0C0F' }}>Mensagens</h2>
            
            {/* Send Message Form */}
            <Card style={{ borderColor: '#BE9161', backgroundColor: '#F5F1EB' }}>
              <CardHeader>
                <CardTitle style={{ color: '#0F0C0F' }}>Enviar Nova Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message" style={{ color: '#0F0C0F' }}>Mensagem</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      rows={4}
                      style={{ backgroundColor: '#F5F1EB', borderColor: '#BE9161', color: '#0F0C0F' }}
                    />
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    style={{ backgroundColor: '#BE9161', color: '#F5F1EB' }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Messages History */}
            <div className="space-y-4">
              {messages.map((msg) => (
                <Card key={msg.id} style={{ borderColor: '#BE9161', backgroundColor: '#F4D29C' }}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold" style={{ color: '#0F0C0F' }}>{msg.subject}</h4>
                      <span className="text-sm" style={{ color: '#BE9161' }}>
                        {new Date(msg.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#BE9161' }}>De: {msg.from}</p>
                    <p style={{ color: '#0F0C0F' }}>{msg.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#0F0C0F' }}>Agendar Consulta</h2>
            
            <Card style={{ borderColor: '#BE9161', backgroundColor: '#F5F1EB' }}>
              <CardHeader>
                <CardTitle style={{ color: '#0F0C0F' }}>Nova Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate" style={{ color: '#0F0C0F' }}>Data *</Label>
                    <Input
                      id="appointmentDate"
                      type="date"
                      value={appointmentData.date}
                      onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                      style={{ backgroundColor: '#F5F1EB', borderColor: '#BE9161', color: '#0F0C0F' }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentTime" style={{ color: '#0F0C0F' }}>Horário *</Label>
                    <Input
                      id="appointmentTime"
                      type="time"
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                      style={{ backgroundColor: '#F5F1EB', borderColor: '#BE9161', color: '#0F0C0F' }}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="appointmentSubject" style={{ color: '#0F0C0F' }}>Assunto *</Label>
                    <Input
                      id="appointmentSubject"
                      value={appointmentData.subject}
                      onChange={(e) => setAppointmentData({...appointmentData, subject: e.target.value})}
                      placeholder="Ex: Consultoria sobre contrato"
                      style={{ backgroundColor: '#F5F1EB', borderColor: '#BE9161', color: '#0F0C0F' }}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="appointmentDescription" style={{ color: '#0F0C0F' }}>Descrição</Label>
                    <Textarea
                      id="appointmentDescription"
                      value={appointmentData.description}
                      onChange={(e) => setAppointmentData({...appointmentData, description: e.target.value})}
                      placeholder="Descreva o motivo da consulta..."
                      rows={3}
                      style={{ backgroundColor: '#F5F1EB', borderColor: '#BE9161', color: '#0F0C0F' }}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    onClick={handleScheduleAppointment}
                    style={{ backgroundColor: '#BE9161', color: '#F5F1EB' }}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Consulta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientArea;
