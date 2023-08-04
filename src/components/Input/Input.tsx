import React from 'react';

import './Input.scss';

interface InputProps {
  value: string;
  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  disabled: boolean;
}

export const Input = ({ value, onChangeHandler, disabled }: InputProps) => {
  return (
    <input
      className='Input'
      type='text'
      value={value}
      onChange={onChangeHandler}
      disabled={disabled}
    />
  );
};
