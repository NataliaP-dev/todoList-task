import React, { memo } from 'react';
import { TodoItemModel } from '../../models/TodoItem';

interface TodoItemProps {
  item: TodoItemModel;
  onEdit: (item: TodoItemModel) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = memo(({ item, onEdit, onDelete }: TodoItemProps) => {
  return (
      <article>
        <input
            type="checkbox"
            onChange={e => onEdit({ ...item, completed: e.target.checked })}
        />
        <h3>{item.title}</h3>
        <div>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Remove</button>
        </div>
      </article>
  );
});

