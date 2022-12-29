import { SlideObject, SlideObjects } from './slide-objects/slide-object'

type Slide = {
    id: string
    objects: SlideObjects,
    backgroundColor: string,
    backgroundImage: string
}

type Slides = Array<Slide>
//TODO продумать background
//TODO Map?

export {
    type Slide,
    type Slides,
}