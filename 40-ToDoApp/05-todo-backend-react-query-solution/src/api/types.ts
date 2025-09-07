export interface ToDo {
  id: number | undefined;
  title: string;
  completed: boolean;
}

export interface ToDosGetResponse {
  result: ToDo[];
}

export interface ToDoPostResponse {
  result: ToDo;
}
