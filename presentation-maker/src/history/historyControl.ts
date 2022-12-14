import { Presentation } from '../types/presentation'

type Presentations = Array<Presentation>

var presentationList: Presentations;
let currentPosition = 0; 

function Push(currState: Presentation): void {
    while (presentationList.length >= currentPosition) {
        presentationList.pop();
    }
    currentPosition++;
    presentationList.push(currState);
}

function GetPreviosPresentation(): Presentation {
    currentPosition--;
    return presentationList[currentPosition];
}

function GetNextPresentation(): Presentation {
    currentPosition++;
    return presentationList[currentPosition];
}

export {
    Push,
    GetPreviosPresentation,
    GetNextPresentation
}