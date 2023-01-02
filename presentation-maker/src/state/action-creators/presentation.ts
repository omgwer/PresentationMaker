import { Dispatch } from "react";
import { PresentationAction, PresentationActionType } from "../actions/PresentationAction";
import { SlideAction } from "../actions/SlideAction";

export const getPresentationName = () => {
    return (dispath: Dispatch<PresentationAction>) => {
        dispath({type: PresentationActionType.GET_NAME})
    }
}