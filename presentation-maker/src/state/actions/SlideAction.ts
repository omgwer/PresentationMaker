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
    UNSET_OBJECT_RESIZABLE = 'UNSET_OBJECT_RESIZABLE',
    BRING_TO_FRONT = 'BRING_TO_FRONT',
    BRING_UPWARD = 'BRING_UPWARD',
    BRING_DOWNWARN = 'BRING_DOWNWARN',
    BRING_TO_BACK = 'BRING_TO_BACK',
    SLIDE_BACKGROUND_IMAGE = 'SLIDE_BACKGROUND_IMAGE'
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

interface ResizeObject {
    type: SlideActionType.RESIZE_OBJECT,
    objectId: string,
    screenX: number,
    screenY: number
}

interface BringToFront {
    type: SlideActionType.BRING_TO_FRONT,
    objectId: string
}

interface BringUpward {
    type: SlideActionType.BRING_UPWARD,
    objectId: string
}

interface BringDownward {
    type: SlideActionType.BRING_DOWNWARN,
    objectId: string
}

interface BringToBack {
    type: SlideActionType.BRING_TO_BACK,
    objectId: string
}

interface setSlideBackgroundImage {
    type: SlideActionType.SLIDE_BACKGROUND_IMAGE,
    base64Content: string
}

export type SlideAction = SetObjectSelectedAction
                          | AddObjectAction
                          | RemoveObjectAction
                          | SetObjectDraggable
                          | UnsetObjectDraggable
                          | SetObjectResizable
                          | UnsetObjectResizable
                          | ResizeObject
                          | MoveObject
                          | BringToFront
                          | BringUpward
                          | BringDownward
                          | BringToBack
                          | setSlideBackgroundImage