import {SlideObjectContentType, SlideObjectProps, DraggableProps} from "../../types/SlideObjectType"
import {useSlideActions} from "../../state/hooks/UseSlidesActions";
import {Presentation} from "../../types/PresentationType";
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";

interface DraggableState {
    isDown: boolean;
    posX: number;
    posY: number;
    screenX: number;
    screenY: number;
}

function Object(props: SlideObjectProps) {
    const presentation: Presentation = useTypedSelector(state => state);
    const {
        setObjectSelected,
        setObjectDraggable,
        moveObject,
        unsetObjectDraggable
    } = useSlideActions();

    let classNames = '';

    let slideId: string = String(presentation.selectedSlideId);
    if (presentation.selectedObjectId !== undefined
        && slideId === presentation.selectedSlideId
        && presentation.selectedObjectId === props.objectId) {
            classNames += "yellow";
    }

    switch (props.contentType) {
        case SlideObjectContentType.TEXT: {
            return (
                <text key={props.objectId}
                      x={props.positionX}
                      y={props.positionY}
                      fill="black"
                      stroke={classNames}
                      onClick={() => setObjectSelected(props.objectId)}
                >Текст</text>
            )
        }
        case SlideObjectContentType.IMAGE: {
            return (
                <></>
            )
        }
        case SlideObjectContentType.RECTANGLE_FIGURE: {
            return (
                <rect id={props.objectId}
                      key={props.objectId}
                      x={props.positionX}
                      y={props.positionY}
                      width={100}
                      height={100}
                      fill="black"
                      stroke={classNames}
                      onClick={() => setObjectSelected(props.objectId)}
                ></rect>
            )
        }
        case SlideObjectContentType.CIRCLE_FIGURE: {
            return (
                <circle key={props.objectId}
                        cx={props.positionX}
                        cy={props.positionY}
                        r={50}
                        //stroke={tmpFigure.borderColor}
                        fill="black"
                        stroke={classNames}
                        onClick={() => setObjectSelected(props.objectId)}
                        onMouseDown={(e: any) => setObjectDraggable(props.objectId)}
                ></circle>
            )
        }
        case SlideObjectContentType.TRIANGLE_FIGURE: {
            return (
                <polygon key={props.objectId}
                         points="100 100 50 200 150 200"
                         fill="black"
                         stroke={classNames}
                         onClick={() => setObjectSelected(props.objectId)}
                ></polygon>
            )
        }
        default:
            return (
                <></>
            )
    }
}

export {
    Object
}