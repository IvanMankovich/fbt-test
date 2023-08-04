import { Action, AnyAction } from "redux";
import { User } from "../../types/types";

export enum UsersListActionType {
  loading = 'loading',
  loadedSuccesfully = 'loadedSuccesfully',
  loadedWithError = 'loadedWithError',
}

export type UsersListState = {
  list: User[];
  loading: boolean;
  error: string | null;
}

export interface UsersListAction extends Action {
  type: UsersListActionType,
  payload: null | string | User[],
}

const initialState: UsersListState = {
  list: [],
  loading: true,
  error: null,
};

export function usersListReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case UsersListActionType.loading:
      return {
        ...state,
        list: [],
        loading: true,
        error: null,
      };
    case UsersListActionType.loadedSuccesfully:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case UsersListActionType.loadedWithError:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}