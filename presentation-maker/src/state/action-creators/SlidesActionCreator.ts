import { Dispatch } from "redux"
import { SlideAction, SlideActionType } from "../actions/SlideAction"

export const setObjectSelected = (slideId: string, objectId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.SET_OBJECT_SELECTED,
            slideId: slideId,
            objectId: objectId
        })
    }
}

export const addObject = (slideId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.ADD_OBJECT,
            slideId: slideId
        })
    }
}

export const removeObject = (slideId: string, objectId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.REMOVE_OBJECT,
            slideId: slideId,
            objectId: objectId
        })
    }
}