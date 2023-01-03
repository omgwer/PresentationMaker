import { Dispatch } from "react";
import { getPresentationFromStorage } from "../../app/storage";
import { PresentationAction, PresentationActionType } from "../actions/PresentationAction";

export const getPresentation = () => {
    return (dispath: Dispatch<PresentationAction>) => {
        var presentation = getPresentationFromStorage();
        var presentationAction: PresentationAction = {type: PresentationActionType.GET_NAME, presentation};
        dispath(presentationAction)
    }
}