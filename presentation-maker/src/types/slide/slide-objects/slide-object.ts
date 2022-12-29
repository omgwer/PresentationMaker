import {Text} from '../../objects/text'
import {Image} from '../../objects/image'
import {Figure} from '../../objects/figure'

type SlideObject = {
    type: 'text'
    content: Text | Image | Figure
    positionX : number,
    positionY : number,
    zIndex: number,
    width: number,
    heigth: number
}

type SlideObjects = Array<SlideObject>
//TODO Подумать над ZIndex

export {
    type SlideObject,
    type SlideObjects
}