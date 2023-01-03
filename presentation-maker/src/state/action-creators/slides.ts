import { Dispatch } from "redux"
import { SlideAction, SlideActionType } from "../actions/SlideAction"

export const addSlide = (slideIndex?: number) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.ADD_SLIDE,
            slideIndex: slideIndex
        })
    }
}

export const removeSlide = (slideIndex: number) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.REMOVE_SLIDE,
            slideIndex: slideIndex
        })
    }
}

export const getSlides = () => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({type: SlideActionType.GET_SLIDES})
    }
}