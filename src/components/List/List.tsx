import { memo, useCallback, useContext, useMemo } from 'react';
import { filterUsers, parseAddress, UserHighlighted } from '../../utils/utils';
import { ListItem } from './ListItem';
import { ModalActionType } from '../../store/reducers/modalsReducer';
import { DispatchContext } from '../../context/context';
import { User, UserAddress } from '../../types/types';

import './List.scss';

interface ListProps {
  items: User[];
  filter: string;
  isLoading: boolean;
  onRemoveItem(id: number): void;
}

export const ListRaw = ({ items, filter, onRemoveItem, isLoading }: ListProps) => {
  const parsedItems = useMemo(() => filterUsers(filter, items), [filter, items]);
  const dispatch = useContext(DispatchContext);

  const onListItemClick = useCallback(
    (userData: UserHighlighted) => {
      dispatch({
        type: ModalActionType.open,
        payload: (
          <>
            <p>
              <b>Company:</b> {userData.company.name}
            </p>
            <p>
              <b>Address:</b> {parseAddress(userData?.address as UserAddress)}
            </p>
          </>
        ),
      });
    },
    [dispatch],
  );

  return (
    <div className='List__wrapper'>
      {isLoading ? (
        <p>Loading...</p>
      ) : parsedItems.length ? (
        <ul className='List'>
          {parsedItems.map((i) => (
            <ListItem
              key={i.id}
              data={i}
              onRemoveItem={onRemoveItem}
              onListItemClick={onListItemClick}
            />
          ))}
        </ul>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export const List = memo(ListRaw);
