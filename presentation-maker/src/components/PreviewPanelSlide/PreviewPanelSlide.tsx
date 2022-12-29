import { useState } from "react";
import { SetSlideSelected } from "../../functions/presentationFuncs";
import { dispatch } from "../../state";
import { AppProps } from "../../types/appProps"
import { Slide } from "../../types/slide/slide";
import styles from "./PreviewPanelSlide.module.css"

function PreviewPanelSlide(prop:AppProps) {
    const [state, setState] = useState('');
    var thisSlide: Slide = prop.slide === undefined ? prop.presentation.slides[0] : prop.slide;
    var classNames = styles.slide;
    if (prop.presentation.selectedSlide?.id === prop.slide?.id)
    {
        classNames += ' ' + styles.selected;
    }
    return(
        <div className={styles.previewBlock} 
            
            onClick={() => {
                prop.presentation.selectedSlide = prop.slide;
                dispatch(SetSlideSelected, thisSlide);
                setState('');
            }}
        >
            <div className={styles.text}></div>
            <div className={classNames}></div>
        </div>
    )
}

export {
    PreviewPanelSlide
}