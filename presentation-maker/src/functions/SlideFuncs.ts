import {Slide, Slides} from '../types/slide/Slide'

function generateId() {
    return Math.random().toString(16).slice(2)
}

function GenerateEmptySlide():Slide {
    return {
        id: generateId()
        // objects: [],
        // backgroundColor: '',
        // backgroundImage: ''
    }
}

function AddEmptySlide(slides: Slides):Slides {
    return [
        ...slides,
        GenerateEmptySlide()
    ]
}

function RemoveSelectedSlide(slides: Slides, selectedSlide: Array<string>):Slides {
    return slides.filter(slideId => slideId.id ! in selectedSlide)
    //return slides.filter(slideId => slideId in selectedSlide);
}

export {
    GenerateEmptySlide,
    AddEmptySlide,
    RemoveSelectedSlide,
    generateId
}