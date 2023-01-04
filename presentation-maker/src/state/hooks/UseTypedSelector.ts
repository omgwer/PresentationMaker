import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../Store";

export const useTypedSelector:TypedUseSelectorHook<State> = useSelector