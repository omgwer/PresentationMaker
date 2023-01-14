import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as PaletteActionCreator from '../action-creators/PaletteActionCreator'

export const usePaletteAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PaletteActionCreator, dispatch);
}