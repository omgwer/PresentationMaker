import { Slide, Slides } from './SlideType'

type Presentation = {
    name : string,
    slides : Slides,
    selectedSlideId : string | undefined,
    selectedObjectId : string | undefined
}

export {
    type Presentation
}