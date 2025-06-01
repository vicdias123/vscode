import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Board, TaskList, Task } from '@/types/kanban'; // Assuming types are defined here
// import supabase from '@/integrations/supabase/client'; // Import Supabase client when ready
import TaskListComponent from './TaskList'; // Component for rendering a list
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// Mock data for initial development
const initialBoardData: Board = {
  id: 'board-1',
  name: 'Projeto Exemplo',
  owner_id: 'user-1',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  lists: [
    {
      id: 'list-1',
      title: 'A Fazer',
      board_id: 'board-1',
      order: 0,
      tasks: [
        { id: 'task-1', title: 'Configurar ambiente', status: 'list-1', order: 0, board_id: 'board-1', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        { id: 'task-2', title: 'Desenvolver componente X', status: 'list-1', order: 1, board_id: 'board-1', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
      ],
    },
    {
      id: 'list-2',
      title: 'Em Progresso',
      board_id: 'board-1',
      order: 1,
      tasks: [
        { id: 'task-3', title: 'Revisar PR #123', status: 'list-2', order: 0, board_id: 'board-1', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
      ],
    },
    {
      id: 'list-3',
      title: 'Concluído',
      board_id: 'board-1',
      order: 2,
      tasks: [],
    },
  ],
};

const KanbanBoard: React.FC<{ boardId: string }> = ({ boardId }) => {
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch board data from Supabase based on boardId
    // For now, using mock data
    setBoard(initialBoardData);
    setLoading(false);
    // Simulating API call
    // const fetchBoard = async () => {
    //   setLoading(true);
    //   const { data, error } = await supabase
    //     .from('boards')
    //     .select('*, lists(*, tasks(*))')
    //     .eq('id', boardId)
    //     .single();
    //   if (error) {
    //     console.error('Error fetching board:', error);
    //     // Handle error (e.g., show toast)
    //   } else {
    //     // Sort lists and tasks by order
    //     data.lists.sort((a, b) => a.order - b.order);
    //     data.lists.forEach(list => list.tasks.sort((a, b) => a.order - b.order));
    //     setBoard(data);
    //   }
    //   setLoading(false);
    // };
    // fetchBoard();
  }, [boardId]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return; // Dropped outside a droppable area
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return; // Dropped in the same place
    }

    if (!board) return;

    // --- Reordering Lists --- 
    if (type === 'list') {
        const newLists = Array.from(board.lists);
        const [reorderedList] = newLists.splice(source.index, 1);
        newLists.splice(destination.index, 0, reorderedList);

        // Update order property for persistence
        const updatedLists = newLists.map((list, index) => ({
            ...list,
            order: index,
        }));

        setBoard({ ...board, lists: updatedLists });
        // TODO: Update list order in Supabase
        return;
    }

    // --- Reordering Tasks --- 
    const startList = board.lists.find(list => list.id === source.droppableId);
    const finishList = board.lists.find(list => list.id === destination.droppableId);

    if (!startList || !finishList) return;

    // Moving tasks within the same list
    if (startList === finishList) {
      const newTasks = Array.from(startList.tasks);
      const [reorderedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, reorderedTask);

      // Update order property for persistence
      const updatedTasks = newTasks.map((task, index) => ({ ...task, order: index }));

      const newList: TaskList = {
        ...startList,
        tasks: updatedTasks,
      };

      const newBoardLists = board.lists.map(list =>
        list.id === newList.id ? newList : list
      );
      setBoard({ ...board, lists: newBoardLists });
      // TODO: Update task order within the list in Supabase
      return;
    }

    // Moving tasks between different lists
    const startTasks = Array.from(startList.tasks);
    const [movedTask] = startTasks.splice(source.index, 1);
    const newStartTasks = startTasks.map((task, index) => ({ ...task, order: index })); // Update order in source list

    const finishTasks = Array.from(finishList.tasks);
    // Update the moved task's status and insert it
    const updatedMovedTask = { ...movedTask, status: finishList.id };
    finishTasks.splice(destination.index, 0, updatedMovedTask);
    const newFinishTasks = finishTasks.map((task, index) => ({ ...task, order: index })); // Update order in destination list

    const newStartList: TaskList = {
      ...startList,
      tasks: newStartTasks,
    };

    const newFinishList: TaskList = {
      ...finishList,
      tasks: newFinishTasks,
    };

    const newBoardLists = board.lists.map(list => {
      if (list.id === newStartList.id) return newStartList;
      if (list.id === newFinishList.id) return newFinishList;
      return list;
    });

    setBoard({ ...board, lists: newBoardLists });
    // TODO: Update task order and status in Supabase (potentially two updates: one for source list order, one for task status and destination list order)
  };

  // TODO: Functions to add new lists and tasks
  const addList = () => {
      console.log("Add new list clicked");
      // Logic to add a new list (update state and Supabase)
  }

  if (loading) {
    return <div>Carregando quadro...</div>; // Replace with a proper Skeleton loader if available
  }

  if (!board) {
    return <div>Quadro não encontrado.</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{board.name}</h1>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex space-x-4 overflow-x-auto pb-4"
            >
              {board.lists.map((list, index) => (
                <TaskListComponent key={list.id} list={list} index={index} />
              ))}
              {provided.placeholder}
              {/* Button to add new list */}
              <div className="flex-shrink-0 w-72">
                 <Button onClick={addList} variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Adicionar outra lista
                 </Button>
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;

