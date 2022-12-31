import { useState } from "react";
import { SetSlideSelected } from "../../functions/presentationFuncs";
import { dispatch } from "../../state";
import { AppProps } from "../../types/appProps"
import { Slide, Slides } from "../../types/slide/slide";
import styles from "./PreviewPanelSlide.module.css"

function PreviewPanelSlide(prop:AppProps) {
    const [state, setState] = useState('');
    var thisSlide: Slide;
    var slideId:string = String(prop.slide);
    if (prop.slide?.length !== 0)
    {
        var thisSlideObj:Slide | undefined = prop.presentation.slides.find(slide => slide.id === prop.slide);
        thisSlide =(thisSlideObj !== undefined)? thisSlideObj: prop.presentation.slides[0];
    }
    else
        thisSlide = prop.presentation.slides[0];
    var classNames = styles.slide;
    if (prop.presentation.selectedSlideUniqueIds.find(slide => slide == slideId) !== undefined)
    {
        classNames += ' ' + styles.selected;
    }
    // for (let i = 0; i < prop.presentation.selectedSlideUniqueIds.length; i++)
    // {
    //     var slide = prop.presentation.slides.find(slide => slide.id == prop.presentation.selectedSlideUniqueIds[i]);
    // }
    return(
        <div className={styles.previewBlock} 
            
            onClick={() => {
                prop.presentation.selectedSlideUniqueIds = [thisSlide.id];
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