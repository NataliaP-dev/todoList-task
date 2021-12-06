import React, { useRef, useState, memo, useEffect } from 'react';

interface NewItemFormProps {
  onSubmitted: (title: string) => void;
}

export const NewItemForm = memo(({ onSubmitted }: NewItemFormProps) => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');

  const onSubmit = () => {
      onSubmitted(title);
      setIsFormOpened(false);
      setTitle('');
  }

  const openForm = () => {
      setIsFormOpened(true);
  };

  useEffect(() => {
      inputRef.current?.focus();
  }, [isFormOpened]);

  return (
    <div>
        {
          isFormOpened ? (
              <form onSubmit={onSubmit}>
                  <label>
                      <span>Todo title:</span>
                      <input
                          ref={inputRef}
                          required
                          onChange={e => setTitle(e.target.value)}
                      />
                  </label>
                  <button>Save</button>
              </form>
            )
            : (
                <button onClick={openForm}>New Todo</button>
            )
        }
    </div>
  );
});
