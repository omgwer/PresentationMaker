import { useState } from "react";
import { SetSlideSelected } from "../../functions/presentationFuncs";
import { dispatch } from "../../state";
import { AppProps } from "../../types/appProps"
import { Slide, Slides } from "../../types/slide/slide";
import styles from "./PreviewPanelSlide.module.css"
import {useTypedSelector} from "../../state/hooks/useTypedSelector";
import {usePresentationActions} from "../../state/hooks/usePresentationActions";

function PreviewPanelSlide(prop:AppProps) {

    const presentation = useTypedSelector(state => state.presentation);

    const {setSlideSelected, addSlideToSelected} = usePresentationActions();

    var slideId:string = String(prop.slide);
    var classNames = styles.slide;
    var isSlideSelected: string | undefined = presentation?.selectedSlideUniqueIds.find(uniqueId => uniqueId === slideId);
    if (isSlideSelected !== undefined) {
        classNames += ' ' + styles.selected;
    }

    return(
        <div className={styles.previewBlock} 
            onClick={ () => {
                setSlideSelected(prop.slide)
            }}
            // onClick={() => {
            //     presentation?.selectedSlideUniqueIds = [thisSlide.id];
            //     // dispatch(SetSlideSelected, thisSlide);
            //     // setState('');
            // }}
        >
            <div className={styles.text}></div>
            <div className={classNames}></div>
        </div>
    )
}

export {
    PreviewPanelSlide
}