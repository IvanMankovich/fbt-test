import { createContext } from "react";
import { store } from "../store/store";

export const DispatchContext = createContext(store.dispatch);