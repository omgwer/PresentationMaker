import { Dispatch } from "redux"
import { SlideAction, SlideActionType } from "../actions/SlideAction"
import { SlideObjectContentType, ResizeType } from "../../types/SlideObjectType"

export const setObjectSelected = (objectId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.SET_OBJECT_SELECTED,
            objectId: objectId
        })
    }
}

export const addObject = (slideId: string, objectType: SlideObjectContentType, value:string = '') => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.ADD_OBJECT,
            slideId: slideId,
            objectType: objectType,
            base64Content: value
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

export const setObjectDraggable = (objectId: string, screenX: number, screenY: number) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.SET_OBJECT_DRAGGABLE,
            objectId: objectId,
            screenX: screenX,
            screenY: screenY
        })
    }
}

export const unsetObjectDraggable = (objectId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.UNSET_OBJECT_DRAGGABLE,
            objectId: objectId
        })
    }
}


export const setObjectResizable = (objectId: string, screenX: number, screenY: number, pointType: ResizeType) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.SET_OBJECT_RESIZABLE,
            objectId: objectId,
            screenX: screenX,
            screenY: screenY,
            pointType: pointType
        })
    }
}

export const unsetObjectResizable = (objectId: string) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.UNSET_OBJECT_RESIZABLE,
            objectId: objectId
        })
    }
}

export const moveObject = (objectId: string, screenX: number, screenY: number) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.MOVE_OBJECT,
            objectId: objectId,
            screenX: screenX,
            screenY: screenY
        })
    }
}

export const resizeObject = (objectId: string, screenX: number, screenY: number) => {
    return (dispatch: Dispatch<SlideAction>) => {
        dispatch({
            type: SlideActionType.RESIZE_OBJECT,
            objectId: objectId,
            screenX: screenX,
            screenY: screenY
        })
    }
}