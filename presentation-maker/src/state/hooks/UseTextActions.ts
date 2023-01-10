import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TextActionCreator from '../action-creators/TextActionCreator'

export const useTextActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TextActionCreator, dispatch);
}