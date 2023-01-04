import { Slide, Slides } from './slide/Slide'

type Presentation = {
    name : string,
    slides : Slides,
    selectedSlideId : string | undefined,
    selectedObjectId : string | undefined
}

export {
    type Presentation
}