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