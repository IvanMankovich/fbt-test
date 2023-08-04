import { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { DispatchContext } from '../../context/context';
import { ModalActionType, ModalState } from '../../store/reducers/modalsReducer';
import { RootState } from '../../store/store';
import { Button } from '../Button/Button';

import './Modal.scss';

export const ModalRaw = () => {
  const { isOpen, content }: ModalState = useSelector((state: RootState) => state.modal);
  const dispatch = useContext(DispatchContext);

  if (!isOpen) {
    return null;
  }

  const onCloseButtonClick = () => {
    dispatch({ type: ModalActionType.close });
  };

  const onOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      onCloseButtonClick();
    }
  };

  return (
    <div className='Overlay' onClick={onOverlayClick}>
      <div className='Modal'>
        <header className='Modal__header'>
          <Button content={<>&#10005;</>} onClickHandler={onCloseButtonClick} />
        </header>
        <div className='Modal__content'>{content}</div>
      </div>
    </div>
  );
};

export const Modal = memo(ModalRaw);
