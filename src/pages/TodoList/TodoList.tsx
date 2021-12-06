import React from 'react';
import { NewItemForm } from '../../components/NewItemForm';
import { TodoItem } from '../../components/TodoItem';
import { useTodoList } from '../../hooks/useTodoList';
import css from './TodoList.module.scss';

export const TodoList = () => {
  const { todos, editTodo, removeTodoById, addTodo } = useTodoList();

  return (
    <div>
      <h1 className={css.title}>My Todo</h1>
      <NewItemForm onSubmitted={addTodo} />
      {todos.length === 0 && <div className={css.noItems}>No todos yet!</div>}
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
