import { Text } from './slideObjects/Text'
import { Image } from './slideObjects/Image'
import { Figure } from './slideObjects/Figure'

//TODO type enum
type SlideObject = {
    id: string
    //type: 'text'
    // content: Text | Image | Figure
    // positionX : number,
    // positionY : number,
    // zIndex: number,
    // width: number,
    // heigth: number
}

type SlideObjectProps = {
    objectId: string,
    objectIndex: number
}

type SlideObjects = Array<SlideObject>
//TODO Подумать над ZIndex

export {
    type SlideObject,
    type SlideObjects,
    type SlideObjectProps
}