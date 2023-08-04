import React, { memo, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  content: string | ReactNode;
  onClickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  disabled?: boolean;
}

export const ButtonRaw = ({ content, onClickHandler, disabled }: ButtonProps) => {
  return (
    <button className='Button' type='button' onClick={onClickHandler} disabled={disabled}>
      {content}
    </button>
  );
};

export const Button = memo(ButtonRaw);
