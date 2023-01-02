import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as PresentationActionCreator from '../action-creators/index'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PresentationActionCreator, dispatch);
}