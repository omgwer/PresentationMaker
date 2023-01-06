import { SlideObjectProps } from "../../types/SlideObjectType"
import {SlideObject, SlideObjectContentType} from "../../types/SlideObjectType";
import {Figure} from "../../types/slideObjects/Figure";
import {Circle} from "../../types/slideObjects/figureObjects/Circle";
import {Ellipse} from "../../types/slideObjects/figureObjects/Ellipse";
import {Polygon} from "../../types/slideObjects/figureObjects/Polygon";
import {Text} from "../../types/slideObjects/Text";
import {ReactNode} from "react";
import { useSlideActions } from "../../state/hooks/UseSlidesActions";
import { generateId } from "../../functions/SlideFuncs";


function Object(props: SlideObjectProps) {
    //const presentation: Presentation = useTypedSelector(state => state);
    
    const { setObjectSelected } = useSlideActions();
    
    switch (props.contentType) {
        case SlideObjectContentType.TEXT: {
            const objectId = generateId();
            return (
                <text key={objectId}
                      x={props.positionX}
                      y={props.positionY}
                      fill="black"
                      onClick={ () => setObjectSelected(objectId) }
                >Текст</text>
            )
        }
        case SlideObjectContentType.IMAGE: {
            return (
                <></>
            )
        }
        case SlideObjectContentType.RECTANGLE_FIGURE: {
            const objectId = generateId();
            return (
                <rect key={objectId}
                      x={props.positionX}
                      y={props.positionY}
                      width={100}
                      height={100}
                      fill="black"
                      onClick={ () => setObjectSelected(objectId) }
                ></rect>
            )
        }
        case SlideObjectContentType.CIRCLE_FIGURE: {
            const objectId = generateId();
            return (
                <circle key={objectId}
                        cx={props.positionX}
                        cy={props.positionY}
                        r={50}
                        //stroke={tmpFigure.borderColor}
                        fill="black"
                        onClick={ () => setObjectSelected(objectId) }
                ></circle>
            )
        }
        case SlideObjectContentType.TRIANGLE_FIGURE: {
            const objectId = generateId();
            return (
                <polygon key={objectId}
                         points="100 100 50 200 150 200"
                         fill="black"
                         onClick={ () => setObjectSelected(objectId) }
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