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

export {
    GenerateEmptySlide,
    AddEmptySlide,
    generateId
}