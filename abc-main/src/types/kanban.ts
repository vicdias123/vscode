// Definições de tipo para as funcionalidades de gestão de tarefas (Kanban)

export interface Task {
  id: string; // UUID gerado pelo Supabase ou localmente
  title: string;
  description?: string;
  status: string; // ID da lista/coluna onde a tarefa está
  order: number; // Ordem da tarefa dentro da lista
  assigned_to?: string; // User ID do responsável (opcional)
  created_at: string; // Timestamp
  updated_at: string; // Timestamp
  board_id: string; // ID do quadro ao qual pertence
}

export interface TaskList {
  id: string; // UUID
  title: string;
  order: number; // Ordem da lista/coluna no quadro
  board_id: string; // ID do quadro ao qual pertence
  tasks: Task[]; // Tarefas dentro desta lista (pode ser carregado separadamente)
}

export interface Board {
  id: string; // UUID
  name: string;
  description?: string;
  created_at: string; // Timestamp
  updated_at: string; // Timestamp
  owner_id: string; // User ID do criador/proprietário
  lists: TaskList[]; // Listas/colunas dentro deste quadro (pode ser carregado separadamente)
}

