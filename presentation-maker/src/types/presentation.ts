import { Slide, Slides } from './slide/slide'

type Presentation = {
    slides : Slides,
    selectedSlide?: Slide,
    name : string
}
// Выделенный слайд
// Выделенный объект

export {
    type Presentation
}