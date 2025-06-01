import React from 'react';
import KanbanBoard from '@/components/kanban/KanbanBoard';
// import AdminLayout from '@/components/layout/AdminLayout'; // Assuming an admin layout exists

const AdminKanbanPage: React.FC = () => {
  // Replace 'board-1' with dynamic board ID fetching logic later
  const boardId = 'board-1'; 

  return (
    // <AdminLayout> // Wrap with AdminLayout if it exists
      <div className="container mx-auto py-8">
        {/* Add breadcrumbs or page title if needed */}
        <KanbanBoard boardId={boardId} />
      </div>
    // </AdminLayout>
  );
};

export default AdminKanbanPage;

