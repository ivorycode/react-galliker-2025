import React, { useState } from 'react';
import { ToDoList } from './ToDoList';
import { ToDo } from '../api/types';
import { useToDos, useDeleteToDoMutation } from '../api/persistence';

function DoneScreen() {
  const { todos, isLoading } = useToDos(true);
  const deleteToDoMutation = useDeleteToDoMutation();

  async function removeToDo(toDo: ToDo) {
    deleteToDoMutation.mutate(toDo);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      {deleteToDoMutation.isLoading && <div>Saving ...</div>}
      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}

export default DoneScreen;
