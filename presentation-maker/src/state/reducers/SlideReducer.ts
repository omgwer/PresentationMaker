import { generateId } from "../../functions/SlideFuncs";
import { Presentation } from "../../types/Presentation";
import { getPresentationFromStorage, setPresentationToStorage } from "../../functions/StoreFuncs";
import { SlideAction, SlideActionType } from "../actions/SlideAction";
import { SlideObject } from "../../types/slide/slideObjects/SlideObject";

function setObjectSetected(presentation: Presentation, selectedSlideId: string, selectedObjectId: string): Presentation {
    console.log(presentation);
    var resultPresentation: Presentation = {
        name: presentation.name,
        slides: presentation.slides,
        selectedSlideId: selectedSlideId,
        selectedObjectId: selectedObjectId
    }
    setPresentationToStorage(resultPresentation);
    console.log(resultPresentation);
    return resultPresentation;
}

function addObject(presentation: Presentation, selectedSlideId: string): Presentation {
    console.log(presentation);
    const newObject: SlideObject = {
        id: generateId()
    }

    let slideIndex = 0;
    for (var slide of presentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = presentation.slides;
    let newObjectList = newSlideList[slideIndex].objects;

    newObjectList.push(newObject);

    var resultPresentation: Presentation = {
        name: presentation.name,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: newObject.id
    }

    setPresentationToStorage(resultPresentation);
    console.log(resultPresentation);
    return resultPresentation;
}

function removeObject(presentation: Presentation, selectedSlideId: string, selectedObjectId: string): Presentation {
    console.log(presentation);
    let slideIndex = 0;
    for (var slide of presentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = presentation.slides;
    let newObjectList = newSlideList[slideIndex].objects;
    
    let objectIndex = 0;
    for (var object of newObjectList) {
        if (object.id === selectedObjectId) break;
        objectIndex++;
    }

    newObjectList.splice(objectIndex, 1);

    var resultPresentation: Presentation = {
        name: presentation.name,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    console.log(resultPresentation);
    return resultPresentation;
}

export const slideReducer = (state: Presentation = getPresentationFromStorage(), action: SlideAction): Presentation => {
    switch (action.type) {
        case SlideActionType.SET_OBJECT_SELECTED:
            return setObjectSetected(state, action.slideId, action.objectId)
        case SlideActionType.ADD_OBJECT:
            return addObject(state, action.slideId)
        case SlideActionType.REMOVE_OBJECT:
            return removeObject(state, action.slideId, action.objectId)
        default:
            return state
    }
}