import { Slide } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { RectangleType, ResizeType, SlideObjectProps } from "../../types/SlideObjectType"

function SlideObjectRectangle(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable,
        setObjectResizable
    } = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide: Slide = presentation.slides[props.slideIndex];
    const object = slide.objects[props.objectIndex] as RectangleType;

    let isSelected = false;
    let slectionLine = <></>;
    if (presentation.selectedObjectId === props.objectId) {
        isSelected = true;
        slectionLine =
        <>
            <rect
                x={object.positionX - 10}
                y={object.positionY - 10}
                width={object.width + 20}
                height={object.height + 20}
                fill="none"
                stroke="#FCD257"
                strokeWidth="2"
                strokeDasharray= "7 7"
                onClick={() => setObjectSelected(props.objectId)}
            />
            <circle
                cx={object.positionX + object.width + 10}
                cy={object.positionY + object.height / 2}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.RIGHT)}
            />
            <circle
                cx={object.positionX + object.width / 2}
                cy={object.positionY + object.height + 10}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.BOTTOM)}
            />
            <circle
                cx={object.positionX - 10}
                cy={object.positionY + object.height / 2}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.LEFT)}
            />
            <circle
                cx={object.positionX + object.width / 2}
                cy={object.positionY - 10}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.TOP)}
            />
        </>
    } 

    return (
        <>
            {slectionLine}
            <rect
                key={props.objectIndex}
                id={props.objectId}
                x={object.positionX}
                y={object.positionY}
                width={object.width}
                height={object.height}
                fill={object.fillColor}
                stroke={object.borderColor}
                strokeWidth={object.borderSize}
                onClick={() => setObjectSelected(object.id)}
                onMouseDown={(e: any) => setObjectDraggable(object.id, e.screenX, e.screenY)}
            />
        </>
    )
}

export {
    SlideObjectRectangle
}