import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '@/types/kanban';
import { Card, CardContent } from '@/components/ui/card';

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-2 ${snapshot.isDragging ? 'shadow-lg' : ''}`}
        >
          <Card className="hover:bg-gray-50">
            <CardContent className="p-2 text-sm">
              {task.title}
              {/* TODO: Add more task details like description, assignee, etc. */}
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

