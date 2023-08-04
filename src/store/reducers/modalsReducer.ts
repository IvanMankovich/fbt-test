import { Action } from "redux";

export enum ModalActionType {
  open = 'open',
  close = 'close'
}

export type ModalState = {
  isOpen: boolean;
  content: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

interface ModalAction extends Action {
  type: ModalActionType,
  payload: null | string,
}

export function modalReducer(state = initialState, action: ModalAction) {
  switch (action.type) {
    case ModalActionType.open:
      return {
        ...state,
        isOpen: true,
        content: action.payload,
      };
    case ModalActionType.close:
      return {
        ...state,
        isOpen: false,
        content: null,
      };
    default:
      return state;
  }
}