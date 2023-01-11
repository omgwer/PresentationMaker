import styles from "./Slide.module.css"
import { SlideProps } from "../../types/SlideType"
import { SlideObject } from "../slideObject/SlideObject"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"

function SlideArea(props: SlideProps) {

    const { moveObject, resizeObject, unsetObjectDraggable, unsetObjectResizable  } = useSlideActions();
    const presentation: Presentation = useTypedSelector(state => state);
    const slide = presentation.slides.filter(slide => slide.id === props.slideId)[0];
    let object = slide.objects.filter(object => object.id === presentation.selectedObjectId)[0];
    const slideObjects = slide.objects.map(
        (object, index) => <SlideObject key={object.id}
                                objectId={object.id}
                                objectIndex={index}
                                contentType={object.contentType}
                                slideIndex={props.slideIndex}
                            />
    );

    let slideBackgroundImage;
    if (slideBackgroundImage !== '') {
        <image xlinkHref={slide.backgroundImage} x="0" y="0" width="100%"/>
    }

    return (
        <svg className={styles.svg} viewBox={props.viewPort} style={{backgroundColor: props.backgroundColor}}
            onMouseUp={(e: any) => {
                if (presentation.selectedObjectId && object.isDownForDrag) {
                    unsetObjectDraggable(presentation.selectedObjectId);
                }
                if (presentation.selectedObjectId && object.isDownForResize) {
                    unsetObjectResizable(presentation.selectedObjectId);
                }
            }}

            onMouseMove={(e: any) => {
                if (presentation.selectedObjectId) {
                    moveObject(presentation.selectedObjectId, e.screenX, e.screenY);
                    resizeObject(presentation.selectedObjectId, e.screenX, e.screenY);
                }
            }}

            onMouseLeave={(e: any) => {
                if (presentation.selectedObjectId) {
                    if (presentation.selectedObjectId && object.isDownForDrag) {
                        unsetObjectDraggable(presentation.selectedObjectId);
                    }
                    if (presentation.selectedObjectId && object.isDownForResize) {
                        unsetObjectResizable(presentation.selectedObjectId);
                    }
                }
            }}>

            {slideBackgroundImage}
            {slideObjects}
        </svg>
    )
}

export {
    SlideArea
}