import { Presentation } from "../../types/PresentationType"
import { SlideObjectText } from "./SlideObjectText"
import { SlideObjectImage } from "./SlideObjectImage"
import { SlideObjectCircle } from "./SlideObjectCircle"
import { SlideObjectTriangle } from "./SlideObjectTriangle"
import { SlideObjectRectangle } from "./SlideObjectRectangle"
import { SlideObjectContentType, SlideObjectProps } from "../../types/SlideObjectType"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"

function SlideObject(props: SlideObjectProps) {

    const presentation: Presentation = useTypedSelector(state => state);

    switch (props.contentType) {
        case SlideObjectContentType.TEXT: {
            return (
                <SlideObjectText 
                    objectId={props.objectId}
                    objectIndex={props.objectIndex}
                    slideIndex={props.slideIndex}
                    contentType={props.contentType}
                />
            )
        }
        case SlideObjectContentType.IMAGE: {
            return (
                <SlideObjectImage
                    objectId={props.objectId}
                    objectIndex={props.objectIndex}
                    slideIndex={props.slideIndex}
                    contentType={props.contentType}
                />
            )
        }
        case SlideObjectContentType.RECTANGLE_FIGURE: {
            return (
                <SlideObjectRectangle
                    objectId={props.objectId}
                    objectIndex={props.objectIndex}
                    slideIndex={props.slideIndex}
                    contentType={props.contentType}
                />
            )
        }
        case SlideObjectContentType.CIRCLE_FIGURE: {
            return (
                <SlideObjectCircle
                    objectId={props.objectId}
                    objectIndex={props.objectIndex}
                    slideIndex={props.slideIndex}
                    contentType={props.contentType}
                />
            )
        }
        case SlideObjectContentType.TRIANGLE_FIGURE: {
            return (
                <SlideObjectTriangle
                    objectId={props.objectId}
                    objectIndex={props.objectIndex}
                    slideIndex={props.slideIndex}
                    contentType={props.contentType}
                />
            )
        }
        default:
            return (
                <></>
            )
    }
}

export {
    SlideObject
}