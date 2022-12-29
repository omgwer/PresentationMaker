import { Presentation } from '../types/presentation'
import { Slide, Slides } from '../types/slide/slide';
import { GenerateEmptySlide, AddEmptySlide } from './slideFuncs';

function ChangePresentationName(presentation:Presentation, newName: string):Presentation {
    return {
        ...presentation,
        name: newName
    };
}

function AddSlide(presentation:Presentation):Presentation {
    let newPresentation = presentation;
    newPresentation.slides = AddEmptySlide(presentation.slides);
    return newPresentation;
}

function RemoveSlide(slides: Slides, selectedSlide: Slide) {
    return slides.filter(slide => slide != selectedSlide);
}

export {
    ChangePresentationName,
    AddSlide,
    RemoveSlide
}