import { Slide } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { CircleType, SlideObjectProps } from "../../types/SlideObjectType"

function SlideObjectCircle(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable
    } = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide: Slide = presentation.slides[props.slideIndex];
    const object = slide.objects[props.objectIndex] as CircleType;

    
    let isSelected = false;
    let slectionLine = <></>;
    if (presentation.selectedObjectId === props.objectId) {
        isSelected = true;
        slectionLine =
            <circle
                cx={object.positionX}
                cy={object.positionY}
                r={object.radius + 10}
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
            <circle
                key={props.objectIndex}
                id={props.objectId}
                cx={object.positionX}
                cy={object.positionY}
                r={object.radius}
                fill={object.fillColor}
                stroke={object.borderColor}
                strokeWidth={object.borderSize}
                onClick={() => setObjectSelected(object.id)}
                onMouseDown={() => setObjectDraggable(object.id)}
            />
        </>
    )
}

export {
    SlideObjectCircle
}