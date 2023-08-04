import { Dispatch, AnyAction } from "redux";
import { UsersListActionType } from "../store/reducers/usersListReducer";

class RequestsService {
  #api: URL;

  constructor(apiPath: URL) {
    this.#api = apiPath;
  }

  async getData(dispatch: Dispatch<AnyAction>) {
    dispatch({ type: UsersListActionType.loading, payload: null });
    const data = await fetch(this.#api)
      .then(res => res.json())
      .then(res => dispatch({ type: UsersListActionType.loadedSuccesfully, payload: res ?? [] }))
      .catch((err) => dispatch({ type: UsersListActionType.loadedWithError, payload: err as string }));
    return data;
  }
}

export const requestsService = new RequestsService(new URL(process.env.REACT_APP_API!));