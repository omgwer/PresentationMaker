import { useState } from "react";
import { AddSlide } from "../../functions/presentationFuncs";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Toolbar.module.css"
import { bindActionCreators } from "redux";
import { useSlideActions } from "../../state/hooks/UseSlidesActions";
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";

function Toolbar() {
    const { addSlide, removeSlide } = useSlideActions();
    const presentation = useTypedSelector(state => state.presentation)
    return (
       <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button + " " + styles.addSlide} onClick={() => {addSlide()}}>
                </button>

                <button className={styles.button + " " + styles.removeSlide} onClick={() => {removeSlide(presentation!.selectedSlideUniqueIds)}}>
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