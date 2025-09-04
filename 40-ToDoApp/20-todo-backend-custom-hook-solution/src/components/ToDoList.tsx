import ToDoListItem from './ToDoListItem';
import { ToDo } from '../api/types';

type ToDoListProps = {
  todos: ToDo[];
  onRemoveToDo: (toDo: ToDo) => void;
};

export function ToDoList({ todos, onRemoveToDo }: ToDoListProps) {
  return (
    <ul id="todo-list" className="todo-list">
      {todos.map(t => (
        <ToDoListItem key={t.id} todo={t} onRemoveToDo={onRemoveToDo} />
      ))}
    </ul>
  );
}
