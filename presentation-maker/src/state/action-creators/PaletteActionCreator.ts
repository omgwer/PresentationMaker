import {Dispatch} from "redux";
import {ToolbarAction, ToolbarActionType} from "../actions/ToolbarAction";

export const setBorderColor = (value: string) => {
    return (dispatch: Dispatch<ToolbarAction>) => {
        dispatch({
            type: ToolbarActionType.BORDER_COLOR,
            value: value
        })
    }
}

export const setBackgroundColor = (value: string) => {
    return (dispatch: Dispatch<ToolbarAction>) => {
        dispatch({
            type: ToolbarActionType.BACKGROUND_COLOR,
            value: value
        })
    }
}

export const setTextBackgroundColor = (value: string) => {
    return (dispatch: Dispatch<ToolbarAction>) => {
        dispatch({
            type: ToolbarActionType.TEXT_BACKGROUND_COLOR,
            value: value
        })
    }
}

export const setTextColor = (value: string) => {
    return (dispatch: Dispatch<ToolbarAction>) => {
        dispatch({
            type: ToolbarActionType.TEXT_COLOR,
            value: value
        })
    }
}