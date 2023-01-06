import { Slide, Slides } from './SlideType'

type Presentation = {
    name : string,
    slides : Slides,
    selectedSlideId : string | undefined,
    selectedObjectId : string | undefined
}

type PresentationNameProps = {
    value: string,
    showInputEle: boolean
}

export {
    type Presentation,
    type PresentationNameProps
}