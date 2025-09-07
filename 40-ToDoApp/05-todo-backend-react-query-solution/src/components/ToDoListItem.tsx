import { NavLink } from 'react-router-dom';
import { ToDo } from '../api/types';

type ToDoListItemProps = {
  todo: ToDo;
  onRemoveToDo: (toDo: ToDo) => void;
};

function ToDoListItem({ todo, onRemoveToDo }: ToDoListItemProps) {
  let removeButton = null;
  if (todo.id) {
    removeButton = <button onClick={() => onRemoveToDo(todo)}>X</button>;
  }

  return (
    <li>
      {todo.title}
      {removeButton}
    </li>
  );
}

export default ToDoListItem;
