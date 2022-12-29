import { useState } from "react";
import { AddSlide } from "../../functions/presentationFuncs";
import { dispatch } from "../../state";
import { AppProps } from "../../types/appProps";
import styles from "./Toolbar.module.css"

function Toolbar(props: AppProps) {
    const [state, setState] = useState('');
    return (
       <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button + " " + styles.addSlide} onClick={() => {
                    dispatch(AddSlide, state)
                    setState('')
                }}>              
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