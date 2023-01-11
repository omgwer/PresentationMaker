import { SlideObject, SlideObjects } from './SlideObjectType';

type Slide = {
    id: string
    objects: SlideObjects,
    // selectedObject?: SlideObject,
    backgroundColor: string,
    backgroundImage: string
}

type SlideProps = {
    slideId: string,
    slideIndex: number,
    viewPort: string,
    backgroundColor: string,
    backgroundImage: string
}

type Slides = Array<Slide>
//TODO продумать background
//TODO Map?

export {
    type Slide,
    type Slides,
    type SlideProps
}