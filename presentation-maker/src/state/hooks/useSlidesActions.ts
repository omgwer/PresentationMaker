import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as SlideActionCreator from '../action-creators/slides'

export const useSlideActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(SlideActionCreator, dispatch);
}