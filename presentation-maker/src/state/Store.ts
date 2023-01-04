import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";
import { Store, Dispatch, createStore, applyMiddleware } from "redux";

export const store : Store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
)

export type State = ReturnType<typeof rootReducer>
