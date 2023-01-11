import { Slide } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { TextType, SlideObjectProps } from "../../types/SlideObjectType"

function SlideObjectText(props: SlideObjectProps) {
    const {
        setObjectSelected,
        setObjectDraggable
    } = useSlideActions();

    const presentation: Presentation = useTypedSelector(state => state);
    const slide: Slide = presentation.slides[props.slideIndex];
    const object = slide.objects[props.objectIndex] as TextType;

    let isSelected = false;
    let slectionLine = <></>;
    if (presentation.selectedObjectId === props.objectId) {
        isSelected = true;
        slectionLine =
            <rect
                x={object.positionX}
                y={object.positionY}
                width={object.width}
                height={object.height}
                fill="none"
                stroke="#FCD257"
                strokeWidth="2"
                strokeDasharray= "7 7"
                onClick={() => setObjectSelected(props.objectId)}
            ></rect>
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

    let objectStyle = '';

    //fontFamily={object.fontFamily}
    //                 fontSize={object.fontSize}
    //                 fontWeight={fontWeight}
    //                 fontStyle={fontStyle}
    //                 textDecoration={textDecoration}
    //                 fill={object.fontColor}
    //                 stroke={object.borderColor}
    //                 strokeWidth={object.borderSize}

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
                <div style={{color:object.fontColor,
                    fontFamily:object.fontFamily,
                    fontSize:object.fontSize,
                    }}>{object.value}</div></foreignObject>
        </>
    )
}

export {
    SlideObjectText
}