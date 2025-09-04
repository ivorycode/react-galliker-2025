import axios from 'axios';
import { ToDo, ToDoPostResponse, ToDosGetResponse } from '../api/types';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3456/todos';

export async function loadToDos(completed = 0): Promise<ToDo[]> {
  const serverResponse = await axios.get<ToDosGetResponse>(API_URL, { params: { completed } });
  return serverResponse.data.result;
}

export async function saveToDo(toDo: ToDo) {
  try {
    const serverResponse = await axios.post<ToDoPostResponse>(API_URL, toDo);
    return serverResponse.data.result;
  } catch {
    alert('Something went terribly wrong!');
    window.location.reload();
  }
}

export async function updateToDo(toDo: ToDo) {
  try {
    await axios.put(`${API_URL}/${toDo.id}`, toDo);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteToDo(toDo: ToDo) {
  try {
    await axios.delete(`${API_URL}/${toDo.id}`);
  } catch (error) {
    console.log(error);
  }
}


export function useToDos(completed: boolean){

  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // using a nested async function since the effect function is not allowed to return a value (except the cleanup function)
    // and async functions implicitly return a promise
    loadData(completed);
  }, []);

  async function loadData(completed: boolean) {
    setLoading(true);
    const todos = await loadToDos(completed ? 1 : 0);
    setTodos(todos);
    setLoading(false)
  }

  async function addToDo(title: string){
    const newToDo: ToDo = { id: Math.random(), title: title, completed: false };
    setLoading(true);
    const newToDos = [...todos, newToDo];
    setTodos(newToDos);
    const persistedToDo = await saveToDo(newToDo);
    if (persistedToDo) {
      setTodos(todos => {
        const updatedToDos = todos.map(t => (t !== newToDo ? t : persistedToDo));
        return updatedToDos;
      });
    }
    setLoading(false);
  }

  async function completeToDo(toDo: ToDo) {
    toDo.completed = true;

    // "OPTIMISTIC UI"
    const updatedToDos = todos.filter(t => t.id !== toDo.id);
    setTodos(updatedToDos);
    setLoading(true);
    await updateToDo(toDo);
    setLoading(false);

    // "PESSIMISTIC UI"
    // setMessage('Saving ...');
    // await updateToDo(toDo);
    // setTodos(todos => todos.filter(t => t.id !== toDo.id));
    // setMessage('');
  }

  async function removeToDo(toDo: ToDo){
    // "OPTIMISTIC UI"
    const newToDos = todos.filter(t => t.id !== toDo.id);
    setTodos(newToDos);
    setLoading(true);
    await deleteToDo(toDo);
    setLoading(false);

    // "PESSIMISTIC UI"
    // await deleteToDo(toDo);
    // setTodos(todos => todos.filter(t => t.id !== toDo.id));
  }

  return {todos, loading, addToDo, completeToDo, removeToDo };
}
