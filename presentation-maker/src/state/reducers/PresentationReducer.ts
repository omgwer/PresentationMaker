import {Slide} from "../../types/SlideType";
import {GenerateEmptySlide, generateId} from "../../functions/SlideFuncs";
import {Presentation} from "../../types/PresentationType";
import {getPresentationFromStorage, setPresentationToStorage} from "../../functions/StoreFuncs";
import {PresentationAction, PresentationActionType} from "../actions/PresentationAction";
import {SlideAction, SlideActionType} from "../actions/SlideAction";
import {SlideObject} from "../../types/SlideObjectType";
import {redo, setNewState, undo} from "../stateManager/StateManager";

function setSlideSetected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    let resultPresentation: Presentation = {
        ...presentation,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }
    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function addSlideSelected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    const newSlide: Slide = GenerateEmptySlide();

    let slideIndex = 0;

    for (let slide of presentation.slides) {
        if (slide.id === selectedSlideId || selectedSlideId === undefined) break;
        slideIndex++;
    }


    let newSlideList = presentation.slides;
    newSlideList.splice(slideIndex + 1, 0, newSlide);

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: newSlide.id,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation
}

function removeSlideSetected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    let slideIndex = 0;
    let tmpPresentation: Presentation = {
        ...presentation
    }
    for (let slide of tmpPresentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = tmpPresentation.slides;
    newSlideList.splice(slideIndex, 1);

    let newSelectedSlideId: string | undefined;
    if (newSlideList.length === 0) {
        newSelectedSlideId = undefined;
    } else if (newSlideList[slideIndex] === undefined) {
        newSelectedSlideId = newSlideList[slideIndex - 1].id;
    } else {
        newSelectedSlideId = newSlideList[slideIndex].id;
    }

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: newSelectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setObjectSetected(presentation: Presentation, selectedSlideId: string, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation,
        selectedSlideId: selectedSlideId,
        selectedObjectId: selectedObjectId
    }
    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function addObject(presentation: Presentation, selectedSlideId: string): Presentation {
    const newObject: SlideObject = {
        id: generateId(),
        type: 'text'
    }

    let tmpPresentation: Presentation = {
        ...presentation
    }

    let slideIndex = 0;
    for (let slide of tmpPresentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = tmpPresentation.slides;
    let newObjectList = newSlideList[slideIndex].objects;

    newObjectList.push(newObject);

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: newObject.id
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function removeObject(presentation: Presentation, selectedSlideId: string, selectedObjectId: string): Presentation {
    let tmpPresentation: Presentation = {
        ...presentation
    }

    let slideIndex = 0;
    for (let slide of tmpPresentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = tmpPresentation.slides;
    let newObjectList = newSlideList[slideIndex].objects;

    let objectIndex = 0;
    for (let object of newObjectList) {
        if (object.id === selectedObjectId) break;
        objectIndex++;
    }

    newObjectList.splice(objectIndex, 1);

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));

    return resultPresentation;
}

function moveUpSlideSetected(presentation: Presentation, selectedSlideId: string): Presentation {
    let newSlideList = presentation.slides;

    let slideIndex = 0;
    for (let slide of newSlideList) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideSelected = newSlideList[slideIndex]

    if (slideIndex != 0) {
        newSlideList.splice(slideIndex, 1);
        newSlideList.splice(slideIndex - 1, 0, newSlideSelected);
    }

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));

    return resultPresentation;
}

function moveDownSlideSetected(presentation: Presentation, selectedSlideId: string): Presentation {
    let newSlideList = presentation.slides;

    let slideIndex = 0;
    for (let slide of newSlideList) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideSelected = newSlideList[slideIndex]
    
    if (slideIndex != newSlideList.length) {
        newSlideList.splice(slideIndex, 1);
        newSlideList.splice(slideIndex + 1, 0, newSlideSelected);
    }

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));

    return resultPresentation;
}

function undoPresentation(state: Presentation): Presentation {
    return undo();
}

function redoPresentation(state: Presentation): Presentation {
    return redo();
}

export const presentationReducer = (state: Presentation = getPresentationFromStorage(), action: PresentationAction | SlideAction): Presentation => {
    switch (action.type) {
        case PresentationActionType.SET_SLIDE_SELECTED:
            return setSlideSetected(state, action.slideId);
        case PresentationActionType.ADD_SLIDE:
            return addSlideSelected(state, action.slideId);
        case PresentationActionType.REMOVE_SLIDE:
            return removeSlideSetected(state, action.slideId);
        case PresentationActionType.MOVE_UP_SLIDE:
            return moveUpSlideSetected(state, action.slideId);
        case PresentationActionType.MOVE_DOWN_SLIDE:
            return moveDownSlideSetected(state, action.slideId);
        case SlideActionType.SET_OBJECT_SELECTED:
            return setObjectSetected(state, action.slideId, action.objectId);
        case SlideActionType.ADD_OBJECT:
            return addObject(state, action.slideId);
        case SlideActionType.REMOVE_OBJECT:
            return removeObject(state, action.slideId, action.objectId);
        case PresentationActionType.UNDO:
            return undoPresentation(state);
        case PresentationActionType.REDO:
            return redoPresentation(state);
        default:
            return state
    }
}


