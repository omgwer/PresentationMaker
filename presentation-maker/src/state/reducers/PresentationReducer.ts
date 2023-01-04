import { Slide } from "../../types/slide/Slide";
import { generateId } from "../../functions/SlideFuncs";
import { Presentation } from "../../types/Presentation";
import { getPresentationFromStorage } from "../../app/Storage";
import { PresentationAction, PresentationActionType } from "../actions/PresentationAction";

function setSlideSetected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    return {
        name: presentation.name,
        slides: presentation.slides,
        selectedSlideId: selectedSlideId
    };
}

function addSlideSelected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    const newSlide: Slide = {
        id: generateId()
    }

    let slideIndex = 0;
    for (var slide of presentation.slides) {
        if (slide.id === selectedSlideId || selectedSlideId === undefined) break;
        slideIndex++;
    }

    let newSlideList: Array<Slide>;
    newSlideList = presentation.slides;
    newSlideList.splice(slideIndex + 1, 0, newSlide);

    return {
        name: presentation.name,
        slides: newSlideList,
        selectedSlideId: newSlide.id
    }
}

function removeSlideSetected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    let slideIndex = 0;
    for (var slide of presentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList: Array<Slide>;
    newSlideList = presentation.slides;
    newSlideList.splice(slideIndex, 1);

    let newSelectedSlideId : string | undefined;
    if (newSlideList.length == 0) {
        newSelectedSlideId = undefined;
    } else if (newSlideList[slideIndex] == undefined) {
        newSelectedSlideId = newSlideList[slideIndex - 1].id;
    } else {
        newSelectedSlideId = newSlideList[slideIndex].id;
    }

    return {
        name: presentation.name,
        slides: newSlideList,
        selectedSlideId: newSelectedSlideId
    }
}
 
export const presentationReducer = (state: Presentation = getPresentationFromStorage(), action: PresentationAction): Presentation => {
    switch (action.type) {
        case PresentationActionType.SET_SLIDE_SELECTED:
            return setSlideSetected(state, action.slideId)
        case PresentationActionType.ADD_SLIDE:
            return addSlideSelected(state, action.slideId)
        case PresentationActionType.REMOVE_SLIDE:
            return removeSlideSetected(state, action.slideId)
        default:
            return state
    }
}