import { ChangeEvent, FormEvent, useState } from 'react';

type NewToDoFormProps = {
  onAddToDo: (title: string) => void
};

export function NewToDoForm({onAddToDo}: NewToDoFormProps) {

  const [toDoTitle, setToDoTitle] = useState('');

  function formChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  function addToDo(e: FormEvent) {
    e.preventDefault();
    onAddToDo(toDoTitle);
    setToDoTitle('');
  }

  return (
    <form className="new-todo" onSubmit={addToDo}>
      <input id="todo-text" name="toDoTitle" type="text" placeholder="What needs to be done?"
             autoFocus
             autoComplete="off"
             value={toDoTitle}
             onChange={formChange}
      />

      <button id="add-button" className="add-button">+</button>
    </form>
  );
}


