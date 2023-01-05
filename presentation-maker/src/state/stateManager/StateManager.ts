import {Presentation} from "../../types/PresentationType";
import {setPresentationToStorage} from "../../functions/StoreFuncs";

const statesCount = 100;
let currStateId = 0;
let stateArray: Array<Presentation> = [];

function setNewState(presentation: Presentation) {
    currStateId++;

    //Если произвели действие после откатов - удаляем все, что было после
    if (currStateId <= stateArray.length) {
        let tmp: Array<Presentation> = [];
        for (let i = 0; i < currStateId - 1; i++) {
            tmp.push(stateArray[i]);
        }
        stateArray = tmp;
        currStateId = stateArray.length + 1;
    }

    //Если количество состояний превышает предел удаляем первый элемент списка
    if (stateArray.length >= statesCount) {
        stateArray = stateArray.filter(state => stateArray[0] !== state);
        currStateId--;
    }

    stateArray.push(presentation);
}

function undo(): Presentation {
    currStateId--;
    let presentation: Presentation = stateArray[currStateId - 1];
    setPresentationToStorage(presentation);
    return presentation;
}

function redo(): Presentation {
    currStateId++;
    let presentation: Presentation = stateArray[currStateId - 1];
    setPresentationToStorage(presentation);
    return presentation;
}

function setStartState(presentation: Presentation) {
    stateArray = [];
    currStateId = 1;
    stateArray.push(presentation);
}

function canUndo(): boolean {
    return currStateId > 1;
}

function canRedo(): boolean {
    return currStateId < stateArray.length;
}

export {
    setNewState,
    setStartState,
    undo,
    redo,
    canUndo,
    canRedo
}