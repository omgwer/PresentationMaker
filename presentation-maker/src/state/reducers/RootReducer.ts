import { combineReducers } from "redux";
import { presentationReducer } from "./PresentationReducer";

const rootReducer = combineReducers({
    presentation: presentationReducer
})


export default rootReducer;