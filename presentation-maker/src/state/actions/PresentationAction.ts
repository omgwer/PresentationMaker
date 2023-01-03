import { Presentation } from "../../types/Presentation";

enum PresentationActionType {
    CHANGE_NAME = 'CHANGE_NAME',
    GET_NAME = 'GET_NAME',
    SET_SLIDE_SELECTED = 'SET_SLIDE_SELECTED',
    ADD_SLIDE_SELECTED = 'ADD_SLIDE_SELECTED'
}

interface GetNameAction {
    type: PresentationActionType.GET_NAME,
    presentation: Presentation
}

interface ChangeNameAction {
    type: PresentationActionType.CHANGE_NAME,
    value:Presentation
}

interface SetSlideSelectedAction {
    type: PresentationActionType.SET_SLIDE_SELECTED,
    uniqueIds: Array<string>
}

interface AddSlideToSelectedAction {
    type: PresentationActionType.ADD_SLIDE_SELECTED,
    uniqueId: string
}

type PresentationAction = GetNameAction | ChangeNameAction | SetSlideSelectedAction | AddSlideToSelectedAction

export {
    PresentationActionType,
    type PresentationAction
}