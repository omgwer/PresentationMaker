import {Dispatch} from "redux";
import {ToolbarAction, ToolbarActionType} from "../actions/ToolbarAction";

export const openPalette = (objectId: string) => {
    return (dispatch: Dispatch<ToolbarAction>) => {
        dispatch({
            type: ToolbarActionType.OPEN_PALETTE,
            objectId: objectId
        })
    }
}