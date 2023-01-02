import { useState } from "react";
import { AddSlide } from "../../functions/presentationFuncs";
import { useDispatch, useSelector } from "react-redux";
import { AppProps } from "../../types/appProps";
import styles from "./Toolbar.module.css"
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
import { useActions } from "../../state/hooks/useActions";

function Toolbar(props: AppProps) {
    const { addSlide, removeSlide } = useActions();
    const state = useSelector((state: State) => state.slide)
    return (
       <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button + " " + styles.addSlide} onClick={() => {addSlide(0)}}>              
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

                <button className={styles.button + " " + styles.addFugure}>              
                </button>
            </div>            
       </div>
    )
}

export {
    Toolbar
}