import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as PresentationActionCreator from '../action-creators/PresentationActionCreator'

export const usePresentationActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PresentationActionCreator, dispatch);
}