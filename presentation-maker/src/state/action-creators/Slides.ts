import { Dispatch } from "redux"
import { SlideAction, SlideActionType } from "../actions/SlideAction"

export const addSlide = (slideIndex?: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.ADD_SLIDE,
            slideUniqueId: ['']
        })
    }
}

export const removeSlide = (slideIndex: Array<string>) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.REMOVE_SLIDE,
            slideUniqueId: slideIndex
        })
    }
}

export const getSlides = () => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({type: SlideActionType.GET_SLIDES})
    }
}