import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToDo, ToDoPostResponse, ToDosGetResponse } from '../api/types';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const API_URL = 'http://localhost:3456/todos';

async function fetchToDos(completed: boolean) {
  const serverResponse = await axios.get<ToDosGetResponse>(API_URL, { params: { completed: completed ? 1 : 0 } });
  return serverResponse.data.result;
}

function postCompletedToDo(toDo: ToDo) {
  toDo.completed = true;
  return axios.put(`${API_URL}/${toDo.id}`, toDo);
}

function deleteToDo(toDo: ToDo){
  return axios.delete(`${API_URL}/${toDo.id}`);
}

const TODO_QUERY_KEY = 'todos';

export function useToDos(completed = false) {
  const { isLoading, error, data } = useQuery<ToDo[]>([TODO_QUERY_KEY, completed], () => fetchToDos(completed));
  return { isLoading, todos: data ?? [] };
}

export function useAddToDoMutation() {
  const queryClient = useQueryClient();
  return useMutation((toDo: ToDo) => axios.post<ToDoPostResponse>(API_URL, toDo), {
    onSuccess() {
      queryClient.invalidateQueries(TODO_QUERY_KEY);
    }
  });
}

export function useCompleteToDoMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    postCompletedToDo,
    {
      onSuccess() {
        queryClient.invalidateQueries(TODO_QUERY_KEY);
      }
    }
  );
}

export function useDeleteToDoMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    deleteToDo,
    {
      onSuccess() {
        queryClient.invalidateQueries(TODO_QUERY_KEY);
      }
    }
  );
}
