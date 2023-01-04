import thunk from "redux-thunk";
import {applyMiddleware, createStore, Store} from "redux";
import {presentationReducer} from "./reducers/PresentationReducer";

export const store: Store = createStore(
    presentationReducer,
    applyMiddleware(thunk)
)

export type State = ReturnType<typeof presentationReducer>
