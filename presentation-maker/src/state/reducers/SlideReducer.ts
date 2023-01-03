import {getPresentationFromStorage} from "../../state";
import {GenerateEmptySlide} from "../../functions/slideFuncs";
import {Presentation} from "../../types/presentation";
import {Slides} from "../../types/slide/slide";
import {PresentationAction, PresentationActionType} from "../actions/PresentationAction";
import {SlideAction, SlideActionType} from "../actions/SlideAction";

function addSlide(slideArray: Slides): Slides {
    slideArray.push(GenerateEmptySlide())
    return slideArray;
}

function removeSlide(slideArray: Slides, uniqueIds: Array<string>): Slides {
    var tmp = slideArray;
    for (let i = 0; i < uniqueIds.length; i++)
    {
        tmp = tmp.filter(slide => slide.id == uniqueIds[i]);
    }
    slideArray = tmp;
    return slideArray
}

function setSlideSetected(selectedSlidesUniqueId: Array<string>, uniqueIds: Array<string>):Array<string> {
    selectedSlidesUniqueId = uniqueIds;
    return selectedSlidesUniqueId;
}

function addSlideSelected(selectedSlidesUniqueId: Array<string>, uniqueId: string):Array<string> {
    selectedSlidesUniqueId.push(uniqueId);
    return selectedSlidesUniqueId;
}

export const slideReducer = (appState = getPresentationFromStorage(), action: SlideAction| PresentationAction) : Presentation | undefined => {
    switch (action.type) {
        case PresentationActionType.GET_NAME:
            return appState;
        case SlideActionType.ADD_SLIDE:
            return {
                name: appState.name,
                slides: addSlide(appState.slides),
                selectedSlideUniqueIds: appState.selectedSlideUniqueIds
            };
        case SlideActionType.REMOVE_SLIDE: {
            return {
                name: appState.name,
                slides: removeSlide(appState.slides, action.slideUniqueId),
                selectedSlideUniqueIds: appState.selectedSlideUniqueIds
            }
        }
        case PresentationActionType.SET_SLIDE_SELECTED:
            return {
                name: appState.name,
                slides: appState.slides,
                selectedSlideUniqueIds: setSlideSetected(appState.selectedSlideUniqueIds, action.uniqueIds)
            }
        case PresentationActionType.ADD_SLIDE_SELECTED:
            return {
                name: appState.name,
                slides: appState.slides,
                selectedSlideUniqueIds: addSlideSelected(appState.selectedSlideUniqueIds, action.uniqueId)
            }
        default:
            return appState
    }
}