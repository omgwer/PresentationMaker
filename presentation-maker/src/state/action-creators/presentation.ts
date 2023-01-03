import { Dispatch } from "react";
import { getPresentationFromStorage } from "../../State";
import { PresentationAction, PresentationActionType } from "../actions/PresentationAction";
import {SlideAction, SlideActionType} from "../actions/SlideAction";

export const getPresentation = () => {
    return (dispath: Dispatch<PresentationAction>) => {
        var presentation = getPresentationFromStorage();
        var presentationAction: PresentationAction = {type: PresentationActionType.GET_NAME, presentation};
        dispath(presentationAction)
    }
}

export const setSlideSelected = (uniqueId: string) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.SET_SLIDE_SELECTED,
            uniqueIds: [uniqueId]
        })
    }
}

export const addSlideToSelected = (uniqueIdCurr: string) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.ADD_SLIDE_SELECTED,
            uniqueId: uniqueIdCurr
        })
    }
}