// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ITodo } from '@/types/tasks'
const baseUrl = 'http://localhost:3001'

export const getAllTodos = async(): Promise<ITodo[]> => {
  const res = await fetch(`${baseUrl}/tasks`);
  const todos: ITodo[] = await res.json();
  return todos;
}

export const addTodo = async (todo: ITodo): Promise<ITodo> => { 
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  const newTodo: ITodo = await res.json();
  return newTodo;
}

export const updateTodo = async (todo: ITodo): Promise<ITodo> => { 
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  const updatedTodo: ITodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (id: number): Promise<void> => { 
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  });
}