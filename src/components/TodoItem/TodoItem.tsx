import React, { memo, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { FaTrashAlt, FaEdit, FaCheck } from 'react-icons/fa';
import { TodoItemModel } from '../../models/TodoItem';
import css from './TodoItem.module.scss';

interface TodoItemProps {
  item: TodoItemModel;
  onEdit: (item: TodoItemModel) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = memo(({ item, onEdit, onDelete }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onEditTitleCompleted = () => {
    setIsEdit(false);
    if (title) {
      onEdit({ ...item, title });
      setTitle('');
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <article className={css.itemWrapper}>
      <label className={cn(css.infoBlock, { [css.completed]: item.completed })}>
        <input
          type="checkbox"
          onChange={e => onEdit({ ...item, completed: e.target.checked })}
        />
        {!isEdit && <h3 className={css.title}>{item.title}</h3>}
      </label>
      {
        isEdit
        ? <div className={css.editItemBlock}>
            <input
              required
              defaultValue={item.title}
              onChange={e => setTitle(e.target.value)}
              ref={inputRef}
              className={css.editItemInput}
            />
            <FaCheck onClick={onEditTitleCompleted} />
          </div>
        : <div className={css.icons}>
            <FaEdit onClick={() => setIsEdit(true)} />
            <FaTrashAlt onClick={() => onDelete(item.id)} />
          </div>
      }
    </article>
  );
});

