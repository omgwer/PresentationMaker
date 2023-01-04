import { SlideObject, SlideObjects } from './slideObjects/SlideObject'

type Slide = {
    id: string
    objects: SlideObjects,
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