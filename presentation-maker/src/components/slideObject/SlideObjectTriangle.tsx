import { Slide } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { offsetTrianglePoints } from "../../functions/SlideFuncs"
import { TriangleType, SlideObjectProps } from "../../types/SlideObjectType"

function SlideObjectTriangle(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable
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
                {x: object.x1, y: object.y1},
                {x: object.x2, y: object.y2},
                {x: object.x3, y: object.y3},
            ],
            10
        );
        slectionLine =
            <polygon
                cx={object.positionX}
                cy={object.positionY}
                points={`${newPoints[0].x} ${newPoints[0].y}
                         ${newPoints[1].x} ${newPoints[1].y}
                         ${newPoints[2].x} ${newPoints[2].y}`}
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
            <polygon 
                key={props.objectIndex}
                id={props.objectId}
                points={`${object.x1} ${object.y1} ${object.x2} ${object.y2} ${object.x3} ${object.y3}`}
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
    SlideObjectTriangle
}