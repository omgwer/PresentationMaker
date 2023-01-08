import {Dispatch} from "redux"
import {TextAction, TextActionType} from "../actions/TextAction"

export const setTextFont = (fontName: string) => {
    return (dispatch: Dispatch<TextAction>) => {
        dispatch({
            type: TextActionType.SET_FONT,
            fontName: fontName
        })
    }
}

export const setTextFontSize = (fontSize: number) => {
    return (dispatch: Dispatch<TextAction>) => {
        dispatch({
            type: TextActionType.SET_FONT_SIZE,
            size: fontSize
        })
    }
}

export const setTextFontBold = (value: boolean) => {
    return (dispatch: Dispatch<TextAction>) => {
        dispatch({
            type: TextActionType.SET_FONT_BOLD,
            value: value
        })
    }
}

export const setTextFontItalics = (value: boolean) => {
    return (dispatch: Dispatch<TextAction>) => {
        dispatch({
            type: TextActionType.SET_FONT_ITALICS,
            value: value
        })
    }
}

export const setTextFontUnderlined = (value: boolean) => {
    return (dispatch: Dispatch<TextAction>) => {
        dispatch({
            type: TextActionType.SET_FONT_UNDERLINED,
            value: value
        })
    }
}