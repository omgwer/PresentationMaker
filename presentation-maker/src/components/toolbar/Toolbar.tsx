import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Toolbar.module.css"
import { bindActionCreators } from "redux";
import { usePresentationActions } from "../../state/hooks/UsePresentationActions";
import { useTypedSelector } from "../../state/hooks/UseTypedSelector";
import { PresentationActionType } from "../../state/actions/PresentationAction";

function Toolbar() {
    const { addSlide, removeSlide } = usePresentationActions();
    const presentation = useTypedSelector(state => state.presentation)
    return (
       <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button + " " + styles.addSlide} onClick={() => {addSlide(presentation.selectedSlideId)}}>
                </button>

                <button className={styles.button + " " + styles.removeSlide} onClick={() => {removeSlide(presentation.selectedSlideId)}}>
                </button>

                <button className={styles.button + " " + styles.cancel}>              
                </button>

                <button className={styles.button + " " + styles.repeat}>              
                </button>

                <button className={styles.button + " " + styles.target}>              
                </button>

                <button className={styles.button + " " + styles.addBlock}>              
                </button>

                <button className={styles.button + " " + styles.addImage}>              
                </button>

                <button className={styles.button + " " + styles.addFigure}>
                </button>
            </div>            
       </div>
    )
}

export {
    Toolbar
}