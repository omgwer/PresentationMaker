import { SlideObject, SlideObjects } from './SlideObjectType'

type Slide = {
    id: string
    objects: SlideObjects,
    // selectedObject?: SlideObject,
    // backgroundColor: string,
    // backgroundImage: string
}

type SlideProps = {
    slideId: string,
    slideOrderId: number
}

type Slides = Array<Slide>
//TODO продумать background
//TODO Map?

export {
    type Slide,
    type Slides,
    type SlideProps
}