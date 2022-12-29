import {Slide, Slides} from '../types/slide/slide'

function generateId() {
    return Math.random().toString(16).slice(2)
}

function GenerateEmptySlide():Slide {
    return {
        id:generateId(),
        objects: [],
        backgroundColor: '',
        backgroundImage: ''
    }
}

function AddEmptySlide(slides: Slides):Slides {

    return [
        ...slides,
        GenerateEmptySlide()
    ]
}

function RemoveSelectedSlide(slides: Slides, selectedSlide?: Slide) {
    if (selectedSlide === undefined || selectedSlide === null)
        return slides;
    return slides.filter(slide => slide !== selectedSlide);
}

export {
    GenerateEmptySlide,
    AddEmptySlide,
    RemoveSelectedSlide,
    generateId
}