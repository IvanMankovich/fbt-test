import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { List } from '../components/List/List';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { UsersListState } from '../store/reducers/usersListReducer';
import { RootState } from '../store/store';
import { User } from '../types/types';

export const UsersSearchRaw = () => {
  const { list, loading }: UsersListState = useSelector((state: RootState) => state.usersList);
  const [currentList, setCurrentList] = useState<User[]>([]);
  const [filter, setFilter] = useState<string>('');

  const onReset = useCallback((): void => {
    setFilter('');
    setCurrentList(list);
  }, [list]);

  const onRemoveItem = useCallback((id: number): void => {
    setCurrentList((prev) => {
      return prev.filter((user: User) => user.id !== id);
    });
  }, []);

  const onInputChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>): void => setFilter(ev.target.value),
    [],
  );

  useEffect(() => {
    setCurrentList(list);
  }, [list]);

  return (
    <>
      <SearchForm
        value={filter}
        onChangeHandler={onInputChangeHandler}
        onReset={onReset}
        disabled={loading}
      />
      <List items={currentList} filter={filter} onRemoveItem={onRemoveItem} isLoading={loading} />
    </>
  );
};

export const UsersSearch = memo(UsersSearchRaw);
