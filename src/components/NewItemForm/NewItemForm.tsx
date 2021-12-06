import React, { useState, memo } from 'react';
import css from './NewItemForm.module.scss';

interface NewItemFormProps {
  onSubmitted: (title: string) => void;
}

export const NewItemForm = memo(({ onSubmitted }: NewItemFormProps) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    onSubmitted(title);
    setTitle('');
  }

  return (
    <div className={css.formWrapper}>
      <form onSubmit={onSubmit}>
        <input
          className={css.input}
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Input task name then tap Enter to add"
        />
        <input type="submit" hidden/>
      </form>
    </div>
  );
});
