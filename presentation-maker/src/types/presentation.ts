import { Slide, Slides } from './slide/slide'

type Presentation = {
    slides : Slides,
    selectedSlide?: Slide,
    name : string
}
//TODO Хранить ID слайда вместо selectedSlide!

// Выделенный слайд
// Выделенный объект

export {
    type Presentation
}