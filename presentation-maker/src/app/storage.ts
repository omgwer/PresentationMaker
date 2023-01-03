import { Presentation } from "../types/Presentation";

const KEY = 'presentationMaker';

function initializePresentation(): Presentation {
    var result: Presentation = {
                           name: "Лучшая презентация на свете!",
                           slides: [],
                           selectedSlideUniqueIds: [],
                               };
    return result;
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