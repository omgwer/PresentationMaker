import styles from "./Slide.module.css"
import {Presentation} from "../../types/PresentationType"
import {SlideProps} from "../../types/SlideType"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector"
import {Object} from "../slideObject/SlideObject"
import {useSlideActions} from "../../state/hooks/UseSlidesActions";

function SlideArea(prop: SlideProps) {
    const {
    setObjectSelected,
    setObjectDraggable,
    moveObject,
    unsetObjectDraggable
} = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide = presentation.slides.filter(slide => slide.id === prop.slideId)[0];
    const slideObjects = slide.objects.map(
        (object, index) => <Object objectId={object.id}
                                   objectIndex={index}
                                   contentType={object.contentType}
                                   positionX={object.positionX}
                                   positionY={object.positionY}
        />
    );

    return (
        <svg className={styles.svg} viewBox={prop.viewPort}
                onMouseUp={(e: any) => {
                    if (presentation.selectedObjectId) {
                        unsetObjectDraggable(presentation.selectedObjectId)}
                    }
                }
                onMouseMove={(e: any) => {
                    if (presentation.selectedObjectId) {
                        moveObject(presentation.selectedObjectId, e.screenX, e.screenY)
                    }

                }}>
            {slideObjects}
        </svg>
    )
}

export {
    SlideArea
}