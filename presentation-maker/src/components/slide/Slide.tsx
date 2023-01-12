import styles from "./Slide.module.css"
import {SlideProps} from "../../types/SlideType"
import {SlideObject} from "../slideObject/SlideObject"
import {Presentation} from "../../types/PresentationType"
import {useSlideActions} from "../../state/hooks/UseSlidesActions"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector"
import React, {useRef} from "react";
import {GenerateSvg} from "../../functions/SvgGenerator";

function SlideArea(props: SlideProps) {

    const presentation: Presentation = useTypedSelector(state => state);
    const {moveObject, resizeObject, unsetObjectDraggable, unsetObjectResizable} = useSlideActions();
    return (<GenerateSvg props={props} />);
}

export {
    SlideArea
}