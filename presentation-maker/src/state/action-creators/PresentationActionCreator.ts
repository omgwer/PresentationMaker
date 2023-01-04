import { Dispatch } from "react";
import { PresentationAction, PresentationActionType } from "../actions/PresentationAction";

export const setSlideSelected = (slideId: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        let selectedSlideId : string | undefined;
        if (slideId != undefined) {
            selectedSlideId = slideId;
        } else {
            selectedSlideId = undefined
        }

        dispatch({
            type: PresentationActionType.SET_SLIDE_SELECTED,
            slideId: selectedSlideId
        })
    }
}

export const addSlide = (slideId: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        let selectedSlideId : string | undefined;
        if (slideId != undefined) {
            selectedSlideId = slideId;
        } else {
            selectedSlideId = undefined
        }

        dispatch({
            type: PresentationActionType.ADD_SLIDE,
            slideId: selectedSlideId
        })
    }
}

export const removeSlide = (slideId: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        let selectedSlideId : string | undefined;
        if (slideId != undefined) {
            selectedSlideId = slideId;
        } else {
            selectedSlideId = undefined
        }
        
        dispatch({
            type: PresentationActionType.REMOVE_SLIDE,
            slideId: slideId
        })
    }
}
