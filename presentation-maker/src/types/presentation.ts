import { Slide, Slides } from './slide/slide'

type Presentation = {
    slides : Slides,
    selectedSlideId: Slide,
    name : string
}
// Выделенный слайд
// Выделенный объект

export {
    type Presentation
}