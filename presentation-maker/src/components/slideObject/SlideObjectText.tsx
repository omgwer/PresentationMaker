import {Slide} from "../../types/SlideType"
import {Presentation} from "../../types/PresentationType"
import {useSlideActions} from "../../state/hooks/UseSlidesActions"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector"
import {ResizeType, SlideObjectProps, TextType} from "../../types/SlideObjectType"

function SlideObjectText(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable,
        setObjectResizable
    } = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide: Slide = presentation.slides[props.slideIndex];
    const object = slide.objects[props.objectIndex] as TextType;

    let isSelected = false;
    let slectionLine = <></>;
    if (presentation.selectedObjectId === props.objectId) {
        isSelected = true;
        slectionLine =
            <>
                <rect
                    x={object.positionX - 5}
                    y={object.positionY - 5}
                    width={object.width + 10}
                    height={object.height + 10}
                    fill="none"
                    stroke="#FCD257"
                    strokeWidth="2"
                    strokeDasharray="7 7"
                    onClick={() => setObjectSelected(props.objectId)}
                ></rect>
                <circle
                    cx={object.positionX + object.width + 5}
                    cy={object.positionY + object.height / 2}
                    r={4}
                    fill="white"
                    stroke="#FCD257"
                    strokeWidth="2"
                    onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.RIGHT)}
                />
                <circle
                    cx={object.positionX + object.width / 2}
                    cy={object.positionY + object.height + 5}
                    r={4}
                    fill="white"
                    stroke="#FCD257"
                    strokeWidth="2"
                    onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.BOTTOM)}
                />
                <circle
                    cx={object.positionX - 5}
                    cy={object.positionY + object.height / 2}
                    r={4}
                    fill="white"
                    stroke="#FCD257"
                    strokeWidth="2"
                    onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.LEFT)}
                />
                <circle
                    cx={object.positionX + object.width / 2}
                    cy={object.positionY - 5}
                    r={4}
                    fill="white"
                    stroke="#FCD257"
                    strokeWidth="2"
                    onMouseDown={(e: any) => setObjectResizable(props.objectId, e.screenX, e.screenY, ResizeType.TOP)}
                />
            </>
    }

    let fontWeight = "normal";
    if (object.isBold) {
        fontWeight = "bold";
    }

    let fontStyle = "normal";
    if (object.isItalic) {
        fontStyle = "italic";
    }

    let textDecoration = "none";
    if (object.isUnderlined) {
        textDecoration = "underline";
    }

    return (
        <>
            {slectionLine}
            <foreignObject
                key={props.objectIndex}
                id={props.objectId}
                x={object.positionX}
                y={object.positionY}
                width={object.width}
                height={object.height}
                onClick={() => setObjectSelected(object.id)}
                onMouseDown={(e: any) => setObjectDraggable(object.id, e.screenX, e.screenY)}
            >
                <div style={{
                    color: object.fontColor,
                    fontFamily: object.fontFamily,
                    fontSize: object.fontSize,
                    textDecorationLine: textDecoration,
                    fontWeight: fontWeight,
                    fontStyle: fontStyle,
                    background: object.borderColor,
                    width: '100%',
                    height: '100%',
                }}>{object.value}</div>
            </foreignObject>
        </>
    )
}

export {
    SlideObjectText
}