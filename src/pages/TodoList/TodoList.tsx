import React from 'react';
import { NewItemForm } from '../../components/NewItemForm';
import { TodoItem } from '../../components/TodoItem';
import { useTodoList } from '../../hooks/useTodoList';

export const TodoList = () => {
  const { todos, editTodo, removeTodoById, addTodo } = useTodoList();

  return (
    <div>
      <NewItemForm onSubmitted={addTodo} />
      {todos.map((el => (
        <TodoItem
          key={el.id}
          item={el}
          onDelete={removeTodoById}
          onEdit={editTodo}
        />
      )))}
    </div>
  );
}
