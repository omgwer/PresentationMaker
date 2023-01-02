import { Slides } from "../../types/slide/slide";
import { SlideAction, SlideActionType } from "../actions/SlideAction";

interface AppState {
    name: string,
    slides: Slides,
    selectedSlideUniqueIds: []
}

const initialState: AppState = {
    name: "Лучшая презентация на свете!",
    slides: [],
    selectedSlideUniqueIds: []
}

function addSlide(slideArray: Slides): Slides {
    slideArray.push({
        id: "test",
        objects: [],
        selectedObject: undefined,
        backgroundColor: "",
        backgroundImage: ""
    })
    return slideArray;
}

function removeSlide(slideArray: Slides, index: number): Slides {
    return slideArray
}

export const slideReducer = (appState = initialState, action: SlideAction) : AppState | undefined => {
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