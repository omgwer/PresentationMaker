import { Text } from './slideObjects/Text'
import { Image } from './slideObjects/Image'
import { Figure } from './slideObjects/Figure'

export enum SlideObjectContentTag {
    TEXT = 'text',
    POLYGON = 'polygon',
    CIRCLE = 'circle'
}

export enum SlideObjectContentType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CIRCLE_FIGURE = 'CIRCLE_FIGURE',
    TRIANGLE_FIGURE = 'TRIANGLE_FIGURE',
    RECTANGLE_FIGURE = 'RECTANGLE_FIGURE'
}

//TODO type enum
type SlideObject = {
    id: string,
    contentType: SlideObjectContentType,
    positionX: number,
    positionY: number,
    isDown: boolean,
    screenX: number,
    screenY: number
    // zIndex: number,
    // width: number,
    // heigth: number
}

type SlideObjectProps = {
    objectId: string,
    objectIndex: number,
    contentType: SlideObjectContentType,
    positionX : number,
    positionY : number,
}

interface DraggableProps {
    initX: number;
    initY: number;
    color: string;
  }  
  
type SlideObjects = Array<SlideObject>
//TODO Подумать над ZIndex

export {
    type SlideObject,
    type SlideObjects,
    type SlideObjectProps,
    type DraggableProps
}