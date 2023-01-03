import { combineReducers } from "redux";
import { slideReducer } from "./SlideReducer";

const reducers = combineReducers({
    presentation: slideReducer
})


export default reducers;
export type State = ReturnType<typeof reducers>;