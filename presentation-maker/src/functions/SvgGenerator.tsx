import {Presentation} from "../types/PresentationType";
import React, {ReactNode} from "react";
import styles from "../components/slide/Slide.module.css";
import {useSlideActions} from "../state/hooks/UseSlidesActions";
import {useTypedSelector} from "../state/hooks/UseTypedSelector";
import {SlideObject} from "../components/slideObject/SlideObject";
import {SlideProps} from "../types/SlideType";

export type SvgGeneratorProps = { props: SlideProps}
export function GenerateSvg(props: SvgGeneratorProps) {

    const presentation: Presentation = useTypedSelector(state => state);
    const {moveObject, resizeObject, unsetObjectDraggable, unsetObjectResizable} = useSlideActions();
    const slide = presentation.slides.filter(slide => slide.id === props.props.slideId)[0];
    let object = slide.objects.filter(object => object.id === presentation.selectedObjectId)[0];
    const slideObjects = slide.objects.map(
        (object, index) => <SlideObject key={object.id}
    objectId={object.id}
    objectIndex={index}
    contentType={object.contentType}
    slideIndex={props.props.slideIndex}
    />
);


    let backgroundImage = <image
        href={props.props.backgroundImage}
    width={'1536'}
    height={'735'}
    />

    let slideWrapper = <>
        {backgroundImage}
    {slideObjects}
    </>


    let test = document.getElementsByTagName('svg');
    return (
        <svg
            className={styles.svg} viewBox={props.props.viewPort} style={{backgroundColor: props.props.backgroundColor}}
    onMouseUp={(e: any) => {
        e.preventDefault();
        if (presentation.selectedObjectId && object.isDownForDrag) {
            unsetObjectDraggable(presentation.selectedObjectId);
        }
        if (presentation.selectedObjectId && object.isDownForResize) {
            unsetObjectResizable(presentation.selectedObjectId);
        }
    }}

    onMouseMove={(e: any) => {
        e.preventDefault();
        if (presentation.selectedObjectId) {
            moveObject(presentation.selectedObjectId, e.screenX, e.screenY);
            resizeObject(presentation.selectedObjectId, e.screenX, e.screenY);
        }
    }}

    onMouseLeave={(e: any) => {
        e.preventDefault();
        if (presentation.selectedObjectId) {
            if (presentation.selectedObjectId && object.isDownForDrag) {
                unsetObjectDraggable(presentation.selectedObjectId);
            }
            if (presentation.selectedObjectId && object.isDownForResize) {
                unsetObjectResizable(presentation.selectedObjectId);
            }
        }
    }}>

    {slideWrapper}
    </svg>
)
}