import { useCallback, useState } from "react"
import { nanoid } from 'nanoid';
import { TodoItemModel } from "../models/TodoItem";

export const useTodoList = () => {
  const [todos, setTodos] = useState<TodoItemModel[]>([]);

  const addTodo = useCallback((title: string) => {
    const newTodos = [...todos, {
        id: nanoid(),
        completed: false,
        title,
    }];
    setTodos(newTodos);
  }, [todos]);

  const editTodo = useCallback((todo: TodoItemModel) => {
    const newTodos = todos.map(el => {
        if (el.id === todo.id) {
            return {
                ...el,
                ...todo
            }
        }
        return el;
    });
    setTodos(newTodos);
  }, [todos]);

  const removeTodoById = useCallback((id: string) => {
    const newTodos = todos.filter(el => el.id !== id);
    setTodos(newTodos);
  }, [todos]);

  return {
    todos,
    addTodo,
    editTodo,
    removeTodoById,
  }
}
