import { combineReducers } from "redux";
import { presentationReducer } from "./PresentationReducer";
//import { slideReducer } from "./SlideReducer";

const rootReducer = combineReducers({
    presentation: presentationReducer//,
   // slide: slideReducer
})


export default rootReducer;