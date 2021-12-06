import { useCallback, useState } from "react"
import { nanoid } from 'nanoid';
import { TodoItemModel } from "../models/TodoItem";

export const useTodoList = () => {
  const [todos, setTodos] = useState<TodoItemModel[]>([]);

  const addTodo = useCallback((title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: nanoid(),
        completed: false,
        title,
      }
    ]);
  }, []);

  const editTodo = useCallback((todo: TodoItemModel) => {
    setTodos((prev) => {
      return prev.map(el => {
        if (el.id === todo.id) {
            return {
                ...el,
                ...todo
            }
        }
        return el;
      });
    });
  }, []);

  const removeTodoById = useCallback((id: string) => {
    setTodos((prev) => prev.filter(el => el.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    editTodo,
    removeTodoById,
  }
}
