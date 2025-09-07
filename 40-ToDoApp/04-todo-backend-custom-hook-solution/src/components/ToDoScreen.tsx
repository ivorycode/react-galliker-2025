import { useToDos } from "../api/persistence";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";
import { useState } from "react";

function ToDoScreen() {
  const { todos, loading, addToDo, completeToDo } = useToDos(false);



  const loadingIndicator = loading ? <div>Loading ...</div> : null;

  return (
    <div>
      {loadingIndicator}
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={completeToDo} />
      </div>
    </div>
  );
}

export default ToDoScreen;
