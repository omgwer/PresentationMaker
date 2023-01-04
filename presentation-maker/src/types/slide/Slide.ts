import { SlideObject, SlideObjects } from './slide-objects/Slide-object'

type Slide = {
    id: string
    // objects: SlideObjects,
    // selectedObject?: SlideObject,
    // backgroundColor: string,
    // backgroundImage: string
}

type Slides = Array<Slide>
//TODO продумать background
//TODO Map?

export {
    type Slide,
    type Slides,
}