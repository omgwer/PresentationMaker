import { Slide } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { ImageType, SlideObjectProps } from "../../types/SlideObjectType"

function SlideObjectImage(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable
    } = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide: Slide = presentation.slides[props.slideIndex];
    const object = slide.objects[props.objectIndex] as ImageType;

    let isSelected = false;
    let slectionLine = <></>;
    if (presentation.selectedObjectId === props.objectId) {
        isSelected = true;
        slectionLine =
            <rect
                x={object.positionX - 10}
                y={object.positionY - 10}
                width={object.width + 20}
                height={object.height + 20}
                fill="none"
                stroke="#FCD257"
                strokeWidth="2"
                stroke-dasharray= "7 7"
                onClick={() => setObjectSelected(props.objectId)}
            />
    }

    return (
        <>
            {slectionLine}
            <image
                key={props.objectIndex}
                id={props.objectId}
                x={object.positionX}
                y={object.positionY}
                xlinkHref=""
                width={object.width}
                height={object.height}
                stroke={object.borderColor}
                strokeWidth={object.borderSize}
                onClick={() => setObjectSelected(object.id)}
                onMouseDown={(e: any) => setObjectDraggable(object.id, e.screenX, e.screenY)}
            />
        </>
    )
}

export {
    SlideObjectImage
}