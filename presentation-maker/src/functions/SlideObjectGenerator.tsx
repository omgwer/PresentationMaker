import {SlideObject, SlideObjectContentTag} from "../types/SlideObjectType";
import {Figure} from "../types/slideObjects/Figure";
import {Circle} from "../types/slideObjects/figureObjects/Circle";
import {Ellipse} from "../types/slideObjects/figureObjects/Ellipse";
import {Polygon} from "../types/slideObjects/figureObjects/Polygon";
import {Text} from "../types/slideObjects/Text";
import {ReactNode} from "react";
import {useSlideActions} from "../state/hooks/UseSlidesActions";

export function GetTagFromObject(slideId: string, slideObject: SlideObject): ReactNode {
    //const presentation: Presentation = useTypedSelector(state => state);
    const {setObjectSelected} = useSlideActions();

    switch (slideObject.contentTag) {
        case SlideObjectContentTag.CIRCLE: {
            let tmpFigure: Figure = slideObject.content as Figure;
            let tmpContent: Circle = tmpFigure.content as Circle;
            return (
                <circle key={slideObject.id} cx={slideObject.positionX} cy={slideObject.positionY} r={tmpContent.radius}
                        stroke={tmpFigure.borderColor} fill={tmpFigure.backgroundColor}
                        onClick={() => setObjectSelected(slideId, slideObject.id)}></circle>
            );
        }
        case SlideObjectContentTag.ELLIPSE: {
            let tmpFigure: Figure = slideObject.content as Figure;
            let tmpContent: Ellipse = tmpFigure.content as Ellipse;
            return (<ellipse key={slideObject.id} cx={slideObject.positionX} cy={slideObject.positionY} rx={tmpContent.rx}
                             ry={tmpContent.ry} stroke={tmpFigure.borderColor} fill={tmpFigure.backgroundColor}
                             onClick={() => setObjectSelected(slideId, slideObject.id)}
            ></ellipse>)
            //     return '<ellipse cx=' + slideObject.positionX + ' cy=' + slideObject.positionY + ' rx=' + tmpContent.rx +
            //         ' ry=' + tmpContent.ry + ' style="stroke:' + tmpFigure.borderColor + ';fill:' +
            //         tmpFigure.backgroundColor + '"></ellipse>'
        }
        case SlideObjectContentTag.POLYGON: {
            let tmpFigure: Figure = slideObject.content as Figure;
            let tmpContent: Polygon = tmpFigure.content as Polygon;
            return (<polygon key={slideObject.id} points={tmpContent.points} stroke={tmpFigure.borderColor} fill={tmpFigure.backgroundColor}
                             onClick={() => setObjectSelected(slideId, slideObject.id)}
            ></polygon>);
            //     return '<polygon points=' + tmpContent.points + 'style="stroke:' + tmpFigure.borderColor +
            //         ';fill:' + tmpFigure.backgroundColor + '"></polygon>'
        }
        default: {
            let tmpText: Text = slideObject.content as Text;
            return (<text key={slideObject.id} x={slideObject.positionX} y={slideObject.positionY} fill={tmpText.fontColor}
                          onClick={() => setObjectSelected(slideId, slideObject.id)}
            >
                {tmpText.value}
            </text>)
            // '<text x="' + slideObject.positionX + '" y="' + slideObject.positionY + '" fill="' + tmpText.fontColor +
            //     '">' + tmpText.value + '</text>'
        }
    }
}