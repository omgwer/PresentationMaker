import {Presentation} from "../../types/Presentation";

const statesCount = 100;
let currStateId = 0;
let stateArray: Array<Presentation> = [];

function setNewState(presentation: Presentation) {
    currStateId++;

    //Если произвели действие после откатов - удаляем все, что было после
    if (currStateId <= stateArray.length) {
        let tmp: Array<Presentation> = [];
        for (let i = 0; i < currStateId; i++) {
            tmp.push(stateArray[i]);
        }
        stateArray = tmp;
    }

    //Если количество состояний превышает предел удаляем первый элемент списка
    if (stateArray.length >= statesCount) {
        stateArray = stateArray.filter(state => stateArray[0] === state);
    }

    stateArray.push(presentation);
}

function undo(): Presentation {
    currStateId--;
    return stateArray[currStateId];
}

function redo(): Presentation {
    currStateId++;
    return stateArray[currStateId];
}

export {
    setNewState,
    undo,
    redo
}