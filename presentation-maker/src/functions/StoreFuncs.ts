import {Presentation} from "../types/Presentation";
import {setStartState} from "../state/stateManager/StateManager";

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
    let result = todos ? JSON.parse(todos) : initializePresentation();
    //Делаем полный клон объекта
    let tmpPresentation: Presentation = JSON.parse(JSON.stringify(result));
    //Добавляем его в стартовое состояние
    setStartState(tmpPresentation);
    return result;
}

export {
    getPresentationFromStorage,
    setPresentationToStorage
}