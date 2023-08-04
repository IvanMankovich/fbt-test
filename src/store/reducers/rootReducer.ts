import { combineReducers } from "redux";
import { modalReducer } from "./modalsReducer";
import { usersListReducer } from "./usersListReducer";

export const rootReducer = combineReducers({
  usersList: usersListReducer,
  modal: modalReducer
})