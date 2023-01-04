export enum PresentationActionType {
    SET_SLIDE_SELECTED = 'SET_SLIDE_SELECTED',
    ADD_SLIDE = 'ADD_SLIDE',
    REMOVE_SLIDE = 'REMOVE_SLIDE',
    UNDO = 'UNDO',
    REDO = 'REDO'
}

interface SetSlideSelectedAction {
    type: PresentationActionType.SET_SLIDE_SELECTED,
    slideId: string | undefined
}

interface AddSlideAction {
    type: PresentationActionType.ADD_SLIDE,
    slideId: string | undefined
}

interface RemoveSlideAction {
    type: PresentationActionType.REMOVE_SLIDE,
    slideId: string | undefined
}

interface UndoAction {
    type: PresentationActionType.UNDO
}

interface RedoAction {
    type: PresentationActionType.REDO
}

export type PresentationAction = SetSlideSelectedAction | AddSlideAction | RemoveSlideAction | UndoAction | RedoAction