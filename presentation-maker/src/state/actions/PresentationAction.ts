export enum PresentationActionType {
    SET_SLIDE_SELECTED = 'SET_SLIDE_SELECTED',
    ADD_SLIDE = 'ADD_SLIDE',
    REMOVE_SLIDE = 'REMOVE_SLIDE',
    UNDO = 'UNDO',
    REDO = 'REDO',
    MOVE_UP_SLIDE = 'MOVE_UP_SLIDE',
    MOVE_DOWN_SLIDE = 'MOVE_DOWN_SLIDE'
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

interface MoveUpSlideAction {
    type: PresentationActionType.MOVE_UP_SLIDE,
    slideId: string
}

interface MoveDownSlideAction {
    type: PresentationActionType.MOVE_DOWN_SLIDE,
    slideId: string
}


interface UndoAction {
    type: PresentationActionType.UNDO
}

interface RedoAction {
    type: PresentationActionType.REDO
}

export type PresentationAction = SetSlideSelectedAction
                                | AddSlideAction
                                | RemoveSlideAction
                                | MoveUpSlideAction
                                | MoveDownSlideAction
                                | UndoAction
                                | RedoAction