import { memo, useCallback } from 'react';
import { UserHighlighted } from '../../utils/utils';
import { Button } from '../Button/Button';

import './ListItem.scss';

interface ListItemProps {
  data: UserHighlighted;
  onRemoveItem(id: number): void;
  onListItemClick(userData: UserHighlighted): void;
}

export const ListItemRaw = ({
  data,
  data: { name, username, email, id },
  onRemoveItem,
  onListItemClick,
}: ListItemProps) => {
  const onRemove = useCallback(() => onRemoveItem(id), [id, onRemoveItem]);
  const onItemClick = useCallback(
    (_event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
      onListItemClick(data);
    },
    [onListItemClick, data],
  );
  const onRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      onRemove();
    },
    [onRemove],
  );

  return (
    <li className='ListItem' onClick={onItemClick}>
      <header className='ListItem__header'>
        <p>{name}</p>
        <Button content={'Remove'} onClickHandler={onRemoveClick} />
      </header>
      <div className='ListItem__content'>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </li>
  );
};

export const ListItem = memo(ListItemRaw);
