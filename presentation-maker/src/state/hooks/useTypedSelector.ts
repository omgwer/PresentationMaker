import {TypedUseSelectorHook, useSelector} from "react-redux";
import {State} from "../reducers";

export const useTypedSelector:TypedUseSelectorHook<State> = useSelector