export enum SlideObjectContentType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CIRCLE_FIGURE = 'CIRCLE_FIGURE',
    TRIANGLE_FIGURE = 'TRIANGLE_FIGURE',
    RECTANGLE_FIGURE = 'RECTANGLE_FIGURE'
}

export enum ResizeType {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT  = 'LEFT',
    RIGHT = 'RIGHT'
}

type SlideObject = {
    id: string,
    contentType: SlideObjectContentType,
    positionX: number,
    positionY: number,
    isDownForDrag: boolean,
    isDownForResize: boolean,
    screenX: number,
    screenY: number
}

type SlideObjectProps = {
    objectId: string,
    slideIndex: number,
    objectIndex: number,
    contentType: SlideObjectContentType
}

type SlideObjects = Array<SlideObject>

type Text = {
    value: string,
    fontSize: number,
    fontFamily: string,
    isBold: boolean,
    isItalic: boolean,
    isUnderlined: boolean,
    fontColor: string,
    borderColor: string,
    borderSize: number
}

type Image = {
    href: string,
    base64Content: string,
    resizePointType: ResizeType | undefined,
    height: number,
    width: number,
    borderSize: number,
    borderColor: string,
}

type Rectangle = {
    height: number,
    width: number,
    resizePointType: ResizeType | undefined,
    fillColor: string, 
    borderColor: string,
    borderSize: number
}

type Circle = {
    radius: number,
    fillColor: string, 
    borderColor: string,
    borderSize: number
}

type Triangle = {
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    resizePointType: ResizeType | undefined,
    fillColor: string, 
    borderColor: string,
    borderSize: number
}

export {
    type SlideObject,
    type SlideObjects,
    type SlideObjectProps
}

export interface TextType extends SlideObject, Text { }
export interface ImageType extends SlideObject, Image { }
export interface RectangleType extends SlideObject, Rectangle { }
export interface TriangleType extends SlideObject, Triangle { }
export interface CircleType extends SlideObject, Circle { }