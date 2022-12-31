import { Presentation } from '../types/presentation'
import { Slide } from '../types/slide/slide';
import { AddEmptySlide, RemoveSelectedSlide } from './slideFuncs';

function ChangePresentationName(presentation:Presentation, newName: string):Presentation {
    return {
        ...presentation,
        name: newName
    };
}

//TODO
function AddSlide(presentation:Presentation):Presentation {
    let newPresentation:Presentation = {
        ...presentation,
        slides: AddEmptySlide(presentation.slides)
    };
    return newPresentation;
}

function RemoveSlide(presentation:Presentation):Presentation {
    let newPresentation = presentation;
    newPresentation.slides = RemoveSelectedSlide(presentation.slides, presentation.selectedSlide);
    return newPresentation;
}


function SetSlideSelected(presentation:Presentation, slide:Slide):Presentation {
    let newPresentation = presentation;
    newPresentation.selectedSlide = slide;
    return newPresentation;
}

export {
    ChangePresentationName,
    AddSlide,
    RemoveSlide,
    SetSlideSelected
}