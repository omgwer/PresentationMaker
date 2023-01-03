import { Slide, Slides } from './slide/Slide'

type Presentation = {
    slides : Slides,
    selectedSlideUniqueIds: Array<string>,
    name : string
}
//TODO Хранить ID слайда вместо selectedSlide!

// Выделенный слайд
// Выделенный объект

export {
    type Presentation
}