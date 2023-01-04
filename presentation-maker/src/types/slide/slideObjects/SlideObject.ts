import {Text} from '../../objects/Text'
import {Image} from '../../objects/Image'
import {Figure} from '../../objects/Figure'

//TODO type enum
type SlideObject = {
    id: string;
    // type: 'text'
    // content: Text | Image | Figure
    // positionX : number,
    // positionY : number,
    // zIndex: number,
    // width: number,
    // heigth: number
}

type SlideObjects = Array<SlideObject>
//TODO Подумать над ZIndex

export {
    type SlideObject,
    type SlideObjects
}