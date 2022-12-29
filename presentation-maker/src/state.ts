import { SetSlideSelected } from "./functions/presentationFuncs";
import { generateId } from "./functions/slideFuncs";
import { Presentation } from "./types/presentation";
import { Slide } from "./types/slide/slide";

const KEY = 'presentationMaker';

let presentation: Presentation = getPresentationFromStorage();
let changePresentationHandler: Function = () => {}
let isPresentationNameEditable: Boolean = false;

function getState():Presentation {
    return presentation;
}

function setState(newPresentation: Presentation) {
    presentation = newPresentation
    changePresentationHandler()
    setPresentationToStorage()
}

function addChangePresentationHandler(handler: Function) {
    changePresentationHandler = handler
}

function setPresentationToStorage() {
    window.localStorage.setItem(KEY, JSON.stringify(presentation))
}

function getPresentationFromStorage(): Presentation {
    const todos = window.localStorage.getItem(KEY);
    return todos ? JSON.parse(todos) : initializePresentation()
}

function initializePresentation():Presentation {

    var mySlide: Slide = {
        id:generateId(),
        backgroundColor: "",
        backgroundImage: "",
        objects: []
    }
    // var slides: Array<Slide> = [mySlide];
    var result: Presentation = {
                           name: "Лучшая презентация на свете!",
                           slides: [],
                           selectedSlide: mySlide,
                               };
    return result;
}

function dispatch(modifyFn: Function, payload: Object) {
    if (modifyFn === SetSlideSelected)
    {
        setState(modifyFn(presentation, payload));
    }
    setState(modifyFn(presentation, payload))
}

function render() {
    changePresentationHandler();
}

function getPresentationNameIsEditable():Boolean {
    return isPresentationNameEditable;
}

function setPresentationNameIsEditable(state: Boolean) {
    isPresentationNameEditable = state;
}

export {
    addChangePresentationHandler,
    getState,
    dispatch,
    render,
    getPresentationNameIsEditable,
    setPresentationNameIsEditable
}