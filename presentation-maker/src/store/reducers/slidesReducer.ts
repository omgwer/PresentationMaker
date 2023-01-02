import {Slides} from "../../types/slide/slide";

const ADD_SLIDE = 'ADD_SLIDE';
const REMOVE_SLIDE = 'ADD_SLIDE';

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

export const slidesReducer = (appState = initialState, action) : AppState | undefined => {
    switch (action.type) {
        case ADD_SLIDE:
            return {
                name: appState.name,
                slides: addSlide(appState.slides),
                selectedSlideUniqueIds: appState.selectedSlideUniqueIds
            };
        case REMOVE_SLIDE: {
            return {
                name: appState.name,
                slides: removeSlide(appState.slides, appState.selectedSlideUniqueIds),
                selectedSlideUniqueIds: appState.selectedSlideUniqueIds
            }
        }
    }
}