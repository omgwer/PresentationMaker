import { Slide } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { offsetTrianglePoints } from "../../functions/SlideFuncs"
import { TriangleType, SlideObjectProps, ResizeType } from "../../types/SlideObjectType"

function SlideObjectTriangle(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable,
        setObjectResizable
    } = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide: Slide = presentation.slides[props.slideIndex];
    const object = slide.objects[props.objectIndex] as TriangleType;

    let isSelected = false;
    let slectionLine = <></>;
    if (presentation.selectedObjectId === props.objectId) {
        isSelected = true;
        let newPoints = offsetTrianglePoints(
            [
                {x: object.positionX, y: object.positionY},
                {x: object.x1, y: object.y1},
                {x: object.x2, y: object.y2},
            ],
            10
        );
        slectionLine =
        <>
            <polygon
                cx={object.positionX}
                cy={object.positionY}
                points={`${newPoints[0].x} ${newPoints[0].y}
                        ${newPoints[1].x} ${newPoints[1].y}
                        ${newPoints[2].x} ${newPoints[2].y}`}
                fill="none"
                stroke="#FCD257"
                strokeWidth="2"
                strokeDasharray= "7 7"
            />
            <circle
                cx={newPoints[0].x}
                cy={newPoints[0].y}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.TOP)}
            />
            <circle
                cx={newPoints[1].x}
                cy={newPoints[1].y}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.LEFT)}
            />
            <circle
                cx={newPoints[2].x}
                cy={newPoints[2].y}
                r={4}
                fill="white"
                stroke="#FCD257"
                strokeWidth="2"
                onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.RIGHT)}
            />
        </>
    }

    return (
        <>
            {slectionLine}
            <polygon 
                key={props.objectIndex}
                id={props.objectId}
                points={`${object.positionX} ${object.positionY} ${object.x1} ${object.y1} ${object.x2} ${object.y2}`}
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
    SlideObjectTriangle
}