import { combineReducers } from "redux";
import { presentationReducer } from "./PresentationReducer";
import { slideReducer } from "./SlideReducer";

const rootReducer = combineReducers({
    presentation: presentationReducer, slideReducer
})


export default rootReducer;