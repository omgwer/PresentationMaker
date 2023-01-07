import { type } from "os"
import { SlideObjectContentType } from "../../types/SlideObjectType"

export enum SlideActionType {
    SET_OBJECT_SELECTED = 'SET_OBJECT_SELECTED',
    ADD_OBJECT = 'ADD_OBJECT',
    REMOVE_OBJECT = 'REMOVE_OBJECT',
    SET_OBJECT_DRAGGABLE = 'SET_OBJECT_DRAGGABLE',
    UNSET_OBJECT_DRAGGABLE = 'UNSET_OBJECT_DRAGGABLE',
    MOVE_OBJECT = 'MOVE_OBJECT'
}

interface SetObjectSelectedAction {
    type: SlideActionType.SET_OBJECT_SELECTED,
    objectId: string
}

interface AddObjectAction {
    type: SlideActionType.ADD_OBJECT,
    slideId: string,
    objectType: SlideObjectContentType
}

interface RemoveObjectAction {
    type: SlideActionType.REMOVE_OBJECT,
    slideId: string,
    objectId: string
}

interface SetObjectDraggable {
    type: SlideActionType.SET_OBJECT_DRAGGABLE,
    objectId: string
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

export type SlideAction = SetObjectSelectedAction
                          | AddObjectAction
                          | RemoveObjectAction
                          | SetObjectDraggable
                          | UnsetObjectDraggable
                          | MoveObject