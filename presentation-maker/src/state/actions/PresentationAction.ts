import { Presentation } from "../../types/presentation";

enum PresentationActionType {
    CHANGE_NAME = 'CHANGE_NAME',
    GET_NAME = 'GET_NAME'
}

interface GetNameAction {
    type: PresentationActionType.GET_NAME,
    presentation: Presentation
}

interface ChangeNameAction {
    type: PresentationActionType.CHANGE_NAME,
    value:Presentation
}

type PresentationAction = GetNameAction | ChangeNameAction

export {
    PresentationActionType,
    type PresentationAction
}