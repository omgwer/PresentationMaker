import styles from "./Slide.module.css"
import { SlideProps } from "../../types/SlideType"
import { SlideObject } from "../slideObject/SlideObject"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"

function SlideArea(props: SlideProps) {

    const { moveObject, unsetObjectDraggable } = useSlideActions();
    const presentation: Presentation = useTypedSelector(state => state);
    const slide = presentation.slides.filter(slide => slide.id === props.slideId)[0];
    const slideObjects = slide.objects.map(
        (object, index) => <SlideObject
                                objectId={object.id}
                                objectIndex={index}
                                contentType={object.contentType}
                                slideIndex={props.slideIndex}
                            />
    );

    return (
        <svg className={styles.svg} viewBox={props.viewPort}
            onMouseUp={(e: any) => {
                if (presentation.selectedObjectId) {
                    unsetObjectDraggable(presentation.selectedObjectId)}
                }
            }

            onMouseMove={(e: any) => {
                if (presentation.selectedObjectId) {
                    moveObject(presentation.selectedObjectId, e.screenX, e.screenY)
                }
            }}

            onMouseLeave={(e: any) => {
                if (presentation.selectedObjectId) {
                    unsetObjectDraggable(presentation.selectedObjectId)
                }
            }}>

            {slideObjects}
        </svg>
    )
}

export {
    SlideArea
}