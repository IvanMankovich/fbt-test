import React, { memo } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

import './SearchForm.scss';

interface SearchFormProps {
  value: string;
  disabled: boolean;
  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  onReset(): void;
}

export const SearchFormRaw = ({ value, disabled, onChangeHandler, onReset }: SearchFormProps) => {
  return (
    <form className='SearchForm'>
      <h2>Users search</h2>
      <section>
        <Input value={value} onChangeHandler={onChangeHandler} disabled={disabled} />
        <Button content={'Reset'} onClickHandler={onReset} disabled={disabled} />
      </section>
    </form>
  );
};

export const SearchForm = memo(SearchFormRaw);
