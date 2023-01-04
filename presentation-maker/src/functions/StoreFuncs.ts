import {Presentation} from "../types/Presentation";

const KEY = 'presentationMaker';

function initializePresentation(): Presentation {
    return {
        name: "Лучшая презентация на свете!",
        slides: [],
        selectedSlideId: undefined,
        selectedObjectId: undefined
    };
}

function setPresentationToStorage(presentation: Presentation) {
    window.localStorage.setItem(KEY, JSON.stringify(presentation))
}

function getPresentationFromStorage(): Presentation {
    const todos = window.localStorage.getItem(KEY);
    return todos ? JSON.parse(todos) : initializePresentation()
}

export {
    getPresentationFromStorage,
    setPresentationToStorage
}