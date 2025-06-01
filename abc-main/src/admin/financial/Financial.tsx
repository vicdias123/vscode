
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  CreditCard,
  Receipt,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import TransactionForm from "@/components/TransactionForm";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: string;
  category?: string;
  client?: string;
  notes?: string;
}

const Financial = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | undefined>();
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      description: "Honorários - João Silva",
      amount: 5000,
      date: "2023-12-15",
      type: "income",
      category: "honorarios",
      client: "João Silva"
    },
    {
      id: 2,
      description: "Aluguel do escritório",
      amount: -3500,
      date: "2023-12-10",
      type: "expense",
      category: "aluguel"
    }
  ]);

  const stats = {
    monthlyRevenue: transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0),
    pendingReceivables: 35000,
    monthlyExpenses: Math.abs(transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0)),
    netProfit: transactions.reduce((sum, t) => sum + t.amount, 0)
  };

  const handleNewTransaction = () => {
    setEditingTransaction(undefined);
    setShowForm(true);
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setShowForm(true);
  };

  const handleDeleteTransaction = (transactionId: number) => {
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
      setTransactions(prev => prev.filter(transaction => transaction.id !== transactionId));
    }
  };

  const handleSaveTransaction = (transactionData: Transaction) => {
    if (editingTransaction) {
      setTransactions(prev => prev.map(transaction => 
        transaction.id === editingTransaction.id ? { ...transactionData, id: editingTransaction.id } : transaction
      ));
    } else {
      setTransactions(prev => [...prev, { ...transactionData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingTransaction(undefined);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTransaction(undefined);
  };

  if (showForm) {
    return (
      <div className="p-6 bg-background min-h-screen">
        <TransactionForm
          transaction={editingTransaction}
          onSave={handleSaveTransaction}
          onCancel={handleCancelForm}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleNewTransaction}
        >
          <Plus className="h-5 w-5 mr-2" />
          Nova Transação
        </Button>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover-scale border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-green-100">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-600">Receita Mensal</p>
                <h3 className="text-2xl font-bold text-foreground">
                  R$ {stats.monthlyRevenue.toLocaleString()}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-blue-600">A Receber</p>
                <h3 className="text-2xl font-bold text-foreground">
                  R$ {stats.pendingReceivables.toLocaleString()}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-red-100">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-red-600">Despesas Mensais</p>
                <h3 className="text-2xl font-bold text-foreground">
                  R$ {stats.monthlyExpenses.toLocaleString()}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gold-100">
                <Receipt className="h-6 w-6 text-gold-600" />
              </div>
              <div>
                <p className="text-sm text-gold-600">Lucro Líquido</p>
                <h3 className="text-2xl font-bold text-foreground">
                  R$ {stats.netProfit.toLocaleString()}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <CreditCard className="h-5 w-5 text-gold-600" />
            Transações Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{transaction.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-gold-600" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </span>
                    {transaction.client && (
                      <>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{transaction.client}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p 
                      className={`text-lg font-bold ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {transaction.type === 'income' ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <span className="text-sm text-muted-foreground">
                      {transaction.type === 'income' ? 'Receita' : 'Despesa'}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditTransaction(transaction)}
                      className="h-8 w-8 text-gold-600 hover:text-gold-700 hover:bg-gold-100"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Financial;
