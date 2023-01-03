import { Presentation } from '../types/Presentation'
import { Slide } from '../types/slide/Slide';
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
    let newPresentation:Presentation = {
        ...presentation,
        slides: RemoveSelectedSlide(presentation.slides, presentation.selectedSlideUniqueIds)
    };
    return newPresentation;
}


function SetSlideSelected(presentation:Presentation, slide:Array<string>):Presentation {
    let newPresentation:Presentation = {
        ...presentation,
        selectedSlideUniqueIds: slide
    };
    return newPresentation;
}

export {
    ChangePresentationName,
    AddSlide,
    RemoveSlide,
    SetSlideSelected
}