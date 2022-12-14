import {Text} from '../../objects/text'
import {Image} from '../../objects/image'
import {Figure} from '../../objects/figure'

type SlideObject = {
    type: Text, Image, Figure
    positionX : number,
    positionY : number,
    zIndex: number,
    width: number,
    heigth: number
}
//TODO Подумать над ZIndex

export {
    type SlideObject
}