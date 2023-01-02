import { GenerateEmptySlide } from "../../functions/slideFuncs";
import { Presentation } from "../../types/presentation";
import { Slides } from "../../types/slide/slide";
import { PresentationAction, PresentationActionType } from "../actions/PresentationAction";
import { SlideAction, SlideActionType } from "../actions/SlideAction";

// interface AppState {
//     name: string,
//     slides: Slides,
//     selectedSlideUniqueIds: []
// }

const initialState: Presentation = {
    name: "Лучшая презентация на свете!",
    slides: [],
    selectedSlideUniqueIds: []
}

function addSlide(slideArray: Slides): Slides {
    slideArray.push(GenerateEmptySlide())
    return slideArray;
}

function removeSlide(slideArray: Slides, index: number): Slides {
    return slideArray
}

export const slideReducer = (appState = initialState, action: SlideAction| PresentationAction) : Presentation | undefined => {
    switch (action.type) {
        case SlideActionType.ADD_SLIDE:
            return {
                name: appState.name,
                slides: addSlide(appState.slides),
                selectedSlideUniqueIds: appState.selectedSlideUniqueIds
            };
        case SlideActionType.REMOVE_SLIDE: {
            return {
                name: appState.name,
                slides: removeSlide(appState.slides, 0),
                selectedSlideUniqueIds: appState.selectedSlideUniqueIds
            }
        }
        default:
            return appState
    }
}