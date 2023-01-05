export enum SlideActionType {
    SET_OBJECT_SELECTED = 'SET_OBJECT_SELECTED',
    ADD_OBJECT = 'ADD_OBJECT',
    REMOVE_OBJECT = 'REMOVE_OBJECT'
}

interface SetObjectSelectedAction {
    type: SlideActionType.SET_OBJECT_SELECTED,
    slideId: string,
    objectId: string
}

interface AddObjectAction {
    type: SlideActionType.ADD_OBJECT,
    slideId: string
}

interface RemoveObjectAction {
    type: SlideActionType.REMOVE_OBJECT,
    slideId: string,
    objectId: string
}

export type SlideAction = SetObjectSelectedAction | AddObjectAction | RemoveObjectAction