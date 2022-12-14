import { SlideObject } from './slide-objects/slide-object'

type Slide = {
    objects: Array<SlideObject>,
    backgroundColor: string,
    backgroundImage: string
}
//TODO продумать background
//TODO Map?

export {
    type Slide
}