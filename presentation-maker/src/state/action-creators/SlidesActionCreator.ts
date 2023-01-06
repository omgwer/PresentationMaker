import { Dispatch } from "redux"
import { SlideAction, SlideActionType } from "../actions/SlideAction"
import { SlideObjectContentType } from "../../types/SlideObjectType"

export const setObjectSelected = (objectId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.SET_OBJECT_SELECTED,
            objectId: objectId
        })
    }
}

export const addObject = (slideId: string, objectType: SlideObjectContentType) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.ADD_OBJECT,
            slideId: slideId,
            objectType: objectType
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