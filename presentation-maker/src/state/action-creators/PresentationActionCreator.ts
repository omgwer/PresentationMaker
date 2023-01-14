import {Dispatch} from "react";
import {PresentationAction, PresentationActionType} from "../actions/PresentationAction";
import {Presentation} from "../../types/PresentationType";

export const setSlideSelected = (slideId: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        let selectedSlideId: string | undefined;
        if (slideId !== undefined) {
            selectedSlideId = slideId;
        } else {
            selectedSlideId = undefined
        }

        dispatch({
            type: PresentationActionType.SET_SLIDE_SELECTED,
            slideId: selectedSlideId
        })
    }
}

export const addSlide = (slideId: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        let selectedSlideId: string | undefined;
        if (slideId !== undefined) {
            selectedSlideId = slideId;
        } else {
            selectedSlideId = undefined
        }

        dispatch({
            type: PresentationActionType.ADD_SLIDE,
            slideId: selectedSlideId
        })
    }
}

export const removeSlide = (slideId: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        let selectedSlideId: string | undefined;
        if (slideId !== undefined) {
            selectedSlideId = slideId;
        } else {
            selectedSlideId = undefined
        }

        dispatch({
            type: PresentationActionType.REMOVE_SLIDE,
            slideId: slideId
        })
    }
}

export const undoPresentation = () => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.UNDO
        })
    }
}

export const redoPresentation = () => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.REDO
        })
    }
}

export const renamePresentation = (name: string | undefined) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.RENAME,
            name: name
        })
    }
}

export const moveUpSlide = (slideId: string) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.MOVE_UP_SLIDE,
            slideId: slideId
        })
    }
}

export const moveDownSlide = (slideId: string) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.MOVE_DOWN_SLIDE,
            slideId: slideId
        })
    }
}

export const addPresentation = (presentation: Presentation) => {
    return (dispatch: Dispatch<PresentationAction>) => {
        dispatch({
            type: PresentationActionType.ADD_NEW_PRESENTATION,
            value: presentation
        })
    }
}