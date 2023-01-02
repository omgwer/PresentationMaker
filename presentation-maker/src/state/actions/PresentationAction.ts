import { Presentation } from "../../types/presentation";

enum PresentationActionType {
    CHANGE_NAME = 'CHANGE_NAME',
    GET_NAME = 'GET_NAME'
}

interface GetNameAction {
    type: PresentationActionType.GET_NAME
}

interface ChangeNameAction {
    type: PresentationActionType.CHANGE_NAME
}

type PresentationAction = GetNameAction | ChangeNameAction

export {
    PresentationActionType,
    type PresentationAction
}