import { Slide } from './slide/slide'

type Presentation = {
    presentation : Array<Slide>,
    selectedSlideId: Slide,
    name : string
}
// Выделенный слайд
// Выделенный объект

export {
    type Presentation
}