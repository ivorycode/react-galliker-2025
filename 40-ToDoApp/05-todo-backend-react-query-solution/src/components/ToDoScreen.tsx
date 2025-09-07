import { useAddToDoMutation, useCompleteToDoMutation, useToDos } from '../api/persistence';
import { ToDo } from '../api/types';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';
import React from 'react';

function ToDoScreen() {
  const { todos, isLoading } = useToDos(false);
  const addToDoMutation = useAddToDoMutation();
  const completeToDoMutation = useCompleteToDoMutation();

  async function addToDo(title: string) {
    const newToDo: ToDo = { id: undefined, title: title, completed: false };
    addToDoMutation.mutate(newToDo);
  }

  async function completeToDo(toDo: ToDo) {
    completeToDoMutation.mutate(toDo);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {(addToDoMutation.isLoading || completeToDoMutation.isLoading) && <div>Saving ...</div>}
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={completeToDo} />
      </div>
    </div>
  );
}

export default ToDoScreen;
