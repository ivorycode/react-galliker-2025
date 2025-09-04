import { ToDo } from "./model/todo";

export function loadToDos(): ToDo[] {
  const todoData = localStorage.getItem("TODOS");
  const todos = todoData ? JSON.parse(todoData) : [];
  return todos;
}

function storeToDos(todos: ToDo[]): void {
  localStorage.setItem("TODOS", JSON.stringify(todos));
}

export function storeNewToDo(newToDo: ToDo): ToDo[] {
  const todos = loadToDos();
  const newToDos = [...todos, newToDo];
  storeToDos(newToDos);
  return newToDos;
}

export function storeToDoAsCompleted(completedToDo: ToDo): ToDo[] {
  const todos = loadToDos();
  const updatedToDos = todos.map((t) =>
    t.id !== completedToDo.id ? t : { ...completedToDo, completed: true }
  );
  storeToDos(updatedToDos);
  return updatedToDos;
}

export function deleteToDo(deletedToDo: ToDo): ToDo[] {
  const todos = loadToDos();
  const newToDos = todos.filter((t) => t.id !== deletedToDo.id);
  storeToDos(newToDos);
  return newToDos;
}
