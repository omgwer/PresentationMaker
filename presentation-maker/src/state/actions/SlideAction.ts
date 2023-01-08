import {SlideObjectContentType} from "../../types/SlideObjectType"
import { ResizeType } from "../../types/SlideObjectType"

export enum SlideActionType {
    ADD_OBJECT = 'ADD_OBJECT',
    MOVE_OBJECT = 'MOVE_OBJECT',
    REMOVE_OBJECT = 'REMOVE_OBJECT',
    RESIZE_OBJECT = 'RESIZE_OBJECT',
    SET_OBJECT_SELECTED = 'SET_OBJECT_SELECTED',
    SET_OBJECT_DRAGGABLE = 'SET_OBJECT_DRAGGABLE',
    UNSET_OBJECT_DRAGGABLE = 'UNSET_OBJECT_DRAGGABLE',
    SET_OBJECT_RESIZABLE = 'SET_OBJECT_RESIZABLE',
    UNSET_OBJECT_RESIZABLE = 'UNSET_OBJECT_RESIZABLE'
}

interface SetObjectSelectedAction {
    type: SlideActionType.SET_OBJECT_SELECTED,
    objectId: string
}

interface AddObjectAction {
    type: SlideActionType.ADD_OBJECT,
    slideId: string,
    objectType: SlideObjectContentType,
    base64Content: string
}

interface RemoveObjectAction {
    type: SlideActionType.REMOVE_OBJECT,
    slideId: string,
    objectId: string
}

interface SetObjectResizable {
    type: SlideActionType.SET_OBJECT_RESIZABLE,
    objectId: string,
    screenX: number,
    screenY: number,
    pointType: ResizeType
}

interface UnsetObjectResizable {
    type: SlideActionType.UNSET_OBJECT_RESIZABLE,
    objectId: string
}

interface SetObjectDraggable {
    type: SlideActionType.SET_OBJECT_DRAGGABLE,
    objectId: string,
    screenX: number,
    screenY: number
}

interface UnsetObjectDraggable {
    type: SlideActionType.UNSET_OBJECT_DRAGGABLE,
    objectId: string
}

interface MoveObject {
    type: SlideActionType.MOVE_OBJECT,
    objectId: string,
    screenX: number,
    screenY: number
}

interface resizeObject {
    type: SlideActionType.RESIZE_OBJECT,
    objectId: string,
    screenX: number,
    screenY: number
}

export type SlideAction = SetObjectSelectedAction
                          | AddObjectAction
                          | RemoveObjectAction
                          | SetObjectDraggable
                          | UnsetObjectDraggable
                          | SetObjectResizable
                          | UnsetObjectResizable
                          | resizeObject
                          | MoveObject