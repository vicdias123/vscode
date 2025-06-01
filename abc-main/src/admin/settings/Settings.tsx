
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  User, 
  Building, 
  Shield,
  Bell,
  Save,
  Eye,
  EyeOff
} from "lucide-react";

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: "Carlos Santos",
    email: "carlos@escritorio.com",
    phone: "(11) 99999-9999"
  });

  const [officeData, setOfficeData] = useState({
    name: "Escritório Santos & Associados",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    phone: "(11) 3333-4444"
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
    loginNotifications: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    processUpdates: true,
    clientMessages: true,
    systemAlerts: true,
    marketingEmails: false
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleSaveProfile = () => {
    console.log('Salvando perfil:', profileData);
    alert('Perfil salvo com sucesso!');
  };

  const handleSaveOffice = () => {
    console.log('Salvando dados do escritório:', officeData);
    alert('Dados do escritório salvos com sucesso!');
  };

  const handleSaveSecurity = () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Salvando configurações de segurança');
    alert('Configurações de segurança salvas com sucesso!');
    setSecurityData(prev => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }));
  };

  const handleSaveNotifications = () => {
    console.log('Salvando configurações de notificações:', notificationSettings);
    alert('Configurações de notificações salvas com sucesso!');
  };

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <div className="flex items-center gap-3">
        <SettingsIcon className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList 
          className="grid w-full grid-cols-4 bg-muted border-border"
        >
          <TabsTrigger 
            value="profile"
            className="text-foreground data-[state=active]:bg-gold-600 data-[state=active]:text-white"
          >
            <User className="h-4 w-4 mr-2" />
            Perfil
          </TabsTrigger>
          <TabsTrigger 
            value="office"
            className="text-foreground data-[state=active]:bg-gold-600 data-[state=active]:text-white"
          >
            <Building className="h-4 w-4 mr-2" />
            Escritório
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="text-foreground data-[state=active]:bg-gold-600 data-[state=active]:text-white"
          >
            <Shield className="h-4 w-4 mr-2" />
            Segurança
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="text-foreground data-[state=active]:bg-gold-600 data-[state=active]:text-white"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notificações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nome</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="bg-background border-border text-foreground focus:ring-gold-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-navy-800">Telefone</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                  />
                </div>
              </div>
              <Button 
                className="bg-gold-600 text-navy-800 hover:bg-gold-700"
                onClick={handleSaveProfile}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="office" className="space-y-6">
          <Card className="border-gold-600 bg-background">
            <CardHeader>
              <CardTitle className="text-navy-800">Dados do Escritório</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="officeName" className="text-navy-800">Nome do Escritório</Label>
                  <Input
                    id="officeName"
                    value={officeData.name}
                    onChange={(e) => setOfficeData({...officeData, name: e.target.value})}
                    className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="officePhone" className="text-navy-800">Telefone</Label>
                  <Input
                    id="officePhone"
                    value={officeData.phone}
                    onChange={(e) => setOfficeData({...officeData, phone: e.target.value})}
                    className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-navy-800">Endereço</Label>
                  <Input
                    id="address"
                    value={officeData.address}
                    onChange={(e) => setOfficeData({...officeData, address: e.target.value})}
                    className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-navy-800">Cidade</Label>
                  <Input
                    id="city"
                    value={officeData.city}
                    onChange={(e) => setOfficeData({...officeData, city: e.target.value})}
                    className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                  />
                </div>
              </div>
              <Button 
                className="bg-gold-600 text-navy-800 hover:bg-gold-700"
                onClick={handleSaveOffice}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="border-gold-600 bg-background">
            <CardHeader>
              <CardTitle className="text-navy-800">Segurança da Conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-navy-800">Alterar Senha</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-navy-800">Senha Atual</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword.current ? "text" : "password"}
                        value={securityData.currentPassword}
                        onChange={(e) => setSecurityData({...securityData, currentPassword: e.target.value})}
                        className="bg-background border-gold-600 text-navy-800 focus:ring-gold-500"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gold-600 hover:text-gold-700"
                        onClick={() => setShowPassword(prev => ({ ...prev, current: !prev.current }))}
                      >
                        {showPassword.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-foreground">Nova Senha</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showPassword.new ? "text" : "password"}
                        value={securityData.newPassword}
                        onChange={(e) => setSecurityData({...securityData, newPassword: e.target.value})}
                        className="bg-background border-border text-foreground focus:ring-gold-500"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gold-600 hover:text-gold-700"
                        onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                      >
                        {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-foreground">Confirmar Nova Senha</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showPassword.confirm ? "text" : "password"}
                        value={securityData.confirmPassword}
                        onChange={(e) => setSecurityData({...securityData, confirmPassword: e.target.value})}
                        className="bg-background border-border text-foreground focus:ring-gold-500"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gold-600 hover:text-gold-700"
                        onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                      >
                        {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground">Configurações de Segurança</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Autenticação de Dois Fatores</Label>
                    <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                  </div>
                  <Switch
                    checked={securityData.twoFactorAuth}
                    onCheckedChange={(checked) => setSecurityData({...securityData, twoFactorAuth: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Notificações de Login</Label>
                    <p className="text-sm text-muted-foreground">Receba alertas sobre novos acessos</p>
                  </div>
                  <Switch
                    checked={securityData.loginNotifications}
                    onCheckedChange={(checked) => setSecurityData({...securityData, loginNotifications: checked})}
                  />
                </div>
              </div>
              
              <Button 
                className="bg-gold-600 text-white hover:bg-gold-700"
                onClick={handleSaveSecurity}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Preferências de Notificação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Canais de Notificação</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Notificações por Email</Label>
                      <p className="text-sm text-muted-foreground">Receba notificações no seu email</p>
                    </div>
                    <Switch
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, emailNotifications: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Notificações Push</Label>
                      <p className="text-sm text-muted-foreground">Notificações no navegador</p>
                    </div>
                    <Switch
                      checked={notificationSettings.pushNotifications}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, pushNotifications: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Notificações por SMS</Label>
                      <p className="text-sm text-muted-foreground">Receba SMS para alertas importantes</p>
                    </div>
                    <Switch
                      checked={notificationSettings.smsNotifications}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, smsNotifications: checked})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground">Tipos de Notificação</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Atualizações de Processos</Label>
                      <p className="text-sm text-muted-foreground">Novidades sobre seus processos</p>
                    </div>
                    <Switch
                      checked={notificationSettings.processUpdates}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, processUpdates: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Mensagens de Clientes</Label>
                      <p className="text-sm text-muted-foreground">Novas mensagens dos clientes</p>
                    </div>
                    <Switch
                      checked={notificationSettings.clientMessages}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, clientMessages: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Alertas do Sistema</Label>
                      <p className="text-sm text-muted-foreground">Manutenções e atualizações</p>
                    </div>
                    <Switch
                      checked={notificationSettings.systemAlerts}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, systemAlerts: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-foreground">Emails de Marketing</Label>
                      <p className="text-sm text-muted-foreground">Novidades e promoções</p>
                    </div>
                    <Switch
                      checked={notificationSettings.marketingEmails}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, marketingEmails: checked})}
                    />
                  </div>
                </div>
              </div>

              <Button 
                className="bg-gold-600 text-white hover:bg-gold-700"
                onClick={handleSaveNotifications}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
