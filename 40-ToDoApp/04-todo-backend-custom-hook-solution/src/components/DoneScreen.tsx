import { ToDoList } from './ToDoList';
import { useToDos } from '../api/persistence';

function DoneScreen() {
  const { todos, loading, removeToDo } = useToDos(true);

  const loadingIndicator = loading ? <div>Loading ...</div> : null;

  return (
    <div>
      {loadingIndicator}
      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}

export default DoneScreen;
