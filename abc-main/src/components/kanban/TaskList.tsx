import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { TaskList, Task } from '@/types/kanban';
import TaskCard from './TaskCard'; // Component for rendering a task
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface TaskListComponentProps {
  list: TaskList;
  index: number;
}

const TaskListComponent: React.FC<TaskListComponentProps> = ({ list, index }) => {

  const addTask = () => {
    console.log(`Add task to list ${list.id} clicked`);
    // Logic to add a new task (update state and Supabase)
  }

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="flex-shrink-0 w-72"
        >
          <Card className="bg-gray-100 h-full flex flex-col">
            <CardHeader {...provided.dragHandleProps} className="p-3 border-b cursor-grab">
              <CardTitle className="text-sm font-medium">{list.title}</CardTitle>
            </CardHeader>
            <Droppable droppableId={list.id} type="task">
              {(provided, snapshot) => (
                <CardContent
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`p-2 flex-grow min-h-[100px] transition-colors duration-200 ease-in-out ${snapshot.isDraggingOver ? 'bg-blue-100' : 'bg-gray-100'}`}
                >
                  {list.tasks.map((task, taskIndex) => (
                    <TaskCard key={task.id} task={task} index={taskIndex} />
                  ))}
                  {provided.placeholder}
                </CardContent>
              )}
            </Droppable>
            <div className="p-2 border-t">
                <Button onClick={addTask} variant="ghost" size="sm" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" /> Adicionar um cartão
                </Button>
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskListComponent;

