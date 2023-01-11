import {Slide} from "../../types/SlideType";
import {
    generateCircleBlock,
    generateEmptySlide,
    generateImageBlock,
    generateRectangleBlock,
    generateTextBlock,
    generateTriangleBlock
} from "../../functions/SlideFuncs";
import {Presentation} from "../../types/PresentationType";
import {getPresentationFromStorage, setPresentationToStorage} from "../../functions/StoreFuncs";
import {PresentationAction, PresentationActionType} from "../actions/PresentationAction";
import {SlideAction, SlideActionType} from "../actions/SlideAction";
import {
    CircleType,
    ImageType,
    RectangleType,
    ResizeType,
    SlideObjectContentType,
    TextType,
    TriangleType
} from "../../types/SlideObjectType";
import {redo, setNewState, undo} from "../stateManager/StateManager";
import {TextAction, TextActionType} from "../actions/TextAction";
import {ToolbarAction, ToolbarActionType} from "../actions/ToolbarAction";

function renamePresentation(presentation: Presentation, name: string | undefined): Presentation {
    let resultPresentation: Presentation;
    if (name) {
        resultPresentation = {
            ...presentation,
            name: name
        }
    } else {
        resultPresentation = presentation;
    }
    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setSlideSelected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    if (presentation.selectedSlideId !== selectedSlideId) {
        let resultPresentation: Presentation = {
            ...presentation,
            selectedSlideId: selectedSlideId,
            selectedObjectId: undefined
        }
        setPresentationToStorage(resultPresentation);
        setNewState(JSON.parse(JSON.stringify(resultPresentation)));
        return resultPresentation;
    } else
        return presentation;
}

function addSlideSelected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    const newSlide: Slide = generateEmptySlide();

    let slideIndex = 0;

    for (let slide of presentation.slides) {
        if (slide.id === selectedSlideId || selectedSlideId === undefined) break;
        slideIndex++;
    }

    let newSlideList = presentation.slides;
    newSlideList.splice(slideIndex + 1, 0, newSlide);

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: newSlide.id,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation
}

function removeSlideSetected(presentation: Presentation, selectedSlideId: string | undefined): Presentation {
    let slideIndex = 0;
    let tmpPresentation: Presentation = {
        ...presentation
    }
    for (let slide of tmpPresentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = tmpPresentation.slides;
    newSlideList.splice(slideIndex, 1);

    let newSelectedSlideId: string | undefined;
    if (newSlideList.length === 0) {
        newSelectedSlideId = undefined;
    } else if (newSlideList[slideIndex] === undefined) {
        newSelectedSlideId = newSlideList[slideIndex - 1].id;
    } else {
        newSelectedSlideId = newSlideList[slideIndex].id;
    }

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: newSelectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setObjectSelected(presentation: Presentation, selectedObjectId: string): Presentation {
    if (presentation.selectedObjectId !== selectedObjectId) {
        let resultPresentation: Presentation = {
            ...presentation,
            selectedObjectId: selectedObjectId
        }
        setPresentationToStorage(resultPresentation);
        setNewState(JSON.parse(JSON.stringify(resultPresentation)));
        return resultPresentation;
    } else
        return presentation;
}

function addObject(presentation: Presentation, selectedSlideId: string, objectType: SlideObjectContentType, base64Content: string = ''): Presentation {
    let newObject: TextType | ImageType | CircleType | TriangleType | RectangleType;
    switch (objectType) {
        case SlideObjectContentType.TEXT: {
            newObject = generateTextBlock() as TextType;
            break;
        }
        case SlideObjectContentType.IMAGE: {
            newObject = generateImageBlock() as ImageType;
            newObject.base64Content = base64Content;
            break;
        }
        case SlideObjectContentType.CIRCLE_FIGURE: {
            newObject = generateCircleBlock() as CircleType;
            break;
        }
        case SlideObjectContentType.TRIANGLE_FIGURE: {
            newObject = generateTriangleBlock() as TriangleType;
            break;
        }
        case SlideObjectContentType.RECTANGLE_FIGURE: {
            newObject = generateRectangleBlock() as RectangleType;
            break;
        }
        default: {
            newObject = generateTextBlock() as TextType;
            break;
        }
    }

    let tmpPresentation: Presentation = {
        ...presentation
    }

    let slideIndex = 0;
    for (let slide of tmpPresentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = tmpPresentation.slides;
    let newObjectList = newSlideList[slideIndex].objects;

    newObjectList.push(newObject);

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: newObject.id
    }
    // console.log(resultPresentation);

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function removeObject(presentation: Presentation, selectedSlideId: string, selectedObjectId: string): Presentation {
    let tmpPresentation: Presentation = {
        ...presentation
    }

    let slideIndex = 0;
    for (let slide of tmpPresentation.slides) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideList = tmpPresentation.slides;
    let newObjectList = newSlideList[slideIndex].objects;

    let objectIndex = 0;
    for (let object of newObjectList) {
        if (object.id === selectedObjectId) break;
        objectIndex++;
    }

    newObjectList.splice(objectIndex, 1);

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));

    return resultPresentation;
}

function setObjectDraggable(presentation: Presentation, selectedObjectId: string, screenX: number, screenY: number): Presentation {
    let resultPresentation: Presentation = {
        ...presentation,
        selectedObjectId: selectedObjectId
    }

    const slide = presentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    const object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];

    object.isDownForDrag = true;
    object.screenX = screenX;
    object.screenY = screenY;

    return resultPresentation;
}

function unsetObjectDraggable(presentation: Presentation, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation,
        selectedObjectId: selectedObjectId
    }

    let slide = presentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];

    object.isDownForDrag = false;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function moveObject(presentation: Presentation, selectedObjectId: string, screenX: number, screenY: number): Presentation {
    let resultPresentation: Presentation = {
        ...presentation
    }

    resultPresentation.slides.forEach(slide => {
        if (slide.id === resultPresentation.selectedSlideId) {
            slide.objects.forEach(slideElement => {
                if (slideElement.id === resultPresentation.selectedObjectId && slideElement.isDownForDrag) {
                    slideElement.positionX = slideElement.positionX + (screenX - slideElement.screenX)
                    slideElement.positionY = slideElement.positionY + (screenY - slideElement.screenY)
                    if (slideElement.contentType === SlideObjectContentType.TRIANGLE_FIGURE) {
                        let currentElement = slideElement as TriangleType;
                        currentElement.x1 = currentElement.x1 + (screenX - currentElement.screenX)
                        currentElement.x2 = currentElement.x2 + (screenX - currentElement.screenX)
                        currentElement.y1 = currentElement.y1 + (screenY - currentElement.screenY)
                        currentElement.y2 = currentElement.y2 + (screenY - currentElement.screenY)
                        slideElement = currentElement;
                    }
                    slideElement.screenX = screenX;
                    slideElement.screenY = screenY;
                }
            })
        }
    })

    return resultPresentation;
}


function setObjectResizable(presentation: Presentation, selectedObjectId: string, screenX: number, screenY: number, pointType: ResizeType): Presentation {
    let resultPresentation: Presentation = {
        ...presentation,
        selectedObjectId: selectedObjectId
    }

    let slide = presentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];

    object.isDownForResize = true;
    object.screenX = screenX;
    object.screenY = screenY;

    switch (object.contentType) {
        case SlideObjectContentType.TRIANGLE_FIGURE: {
            let currentElement = object as TriangleType;
            currentElement.resizePointType = pointType;
            object = currentElement;
            break;
        }
        case SlideObjectContentType.RECTANGLE_FIGURE: {
            let currentElement = object as RectangleType;
            currentElement.resizePointType = pointType;
            object = currentElement;
            break;
        }
        case SlideObjectContentType.IMAGE: {
            let currentElement = object as ImageType;
            currentElement.resizePointType = pointType;
            object = currentElement;
            break;
        }
        case SlideObjectContentType.TEXT: {
            let currentElement = object as TextType;
            currentElement.resizePointType = pointType;
            object = currentElement;
            break;
        }
    }

    return resultPresentation;
}

function unsetObjectResizable(presentation: Presentation, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation,
        selectedObjectId: selectedObjectId
    }

    let slide = presentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];

    object.isDownForResize = false;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function resizeObject(presentation: Presentation, selectedObjectId: string, screenX: number, screenY: number): Presentation {
    let resultPresentation: Presentation = {
        ...presentation
    }

    resultPresentation.slides.forEach(slide => {
        if (slide.id === resultPresentation.selectedSlideId) {
            slide.objects.forEach(slideElement => {
                if (slideElement.id === selectedObjectId && slideElement.isDownForResize) {

                    switch (slideElement.contentType) {

                        case SlideObjectContentType.TRIANGLE_FIGURE: {
                            let currentElement = slideElement as TriangleType;

                            switch (currentElement.resizePointType) {
                                case ResizeType.TOP: {
                                    currentElement.positionX = currentElement.positionX + (screenX - currentElement.screenX);
                                    currentElement.positionY = currentElement.positionY + (screenY - currentElement.screenY);
                                    break;
                                }
                                case ResizeType.LEFT: {
                                    currentElement.x1 = currentElement.x1 + (screenX - currentElement.screenX);
                                    currentElement.y1 = currentElement.y1 + (screenY - currentElement.screenY);
                                    break;
                                }
                                case ResizeType.RIGHT: {
                                    currentElement.x2 = currentElement.x2 + (screenX - currentElement.screenX);
                                    currentElement.y2 = currentElement.y2 + (screenY - currentElement.screenY);
                                    break;
                                }
                            }
                            slideElement = currentElement;
                            break;
                        }

                        case SlideObjectContentType.RECTANGLE_FIGURE: {
                            let currentElement = slideElement as RectangleType;

                            switch (currentElement.resizePointType) {
                                case ResizeType.TOP: {
                                    if (slideElement.screenY + currentElement.height - 50 > screenY) {
                                        currentElement.positionY = currentElement.positionY + (screenY - slideElement.screenY);
                                        currentElement.height = currentElement.height - (screenY - slideElement.screenY);
                                    } else {
                                        currentElement.height = 50;
                                    }
                                    break;
                                }
                                case ResizeType.LEFT: {
                                    if (slideElement.screenX + currentElement.width - 50 > screenX) {
                                        currentElement.positionX = currentElement.positionX + (screenX - slideElement.screenX);
                                        currentElement.width = currentElement.width - (screenX - slideElement.screenX);
                                    } else {
                                        currentElement.width = 50;
                                    }
                                    break;
                                }
                                case ResizeType.RIGHT: {
                                    if ((slideElement.screenX - currentElement.width) + 50 < screenX) {
                                        currentElement.width = currentElement.width + (screenX - slideElement.screenX)
                                    } else {
                                        currentElement.width = 50;
                                    }
                                    break;
                                }
                                case ResizeType.BOTTOM: {
                                    if ((slideElement.screenY - currentElement.height) + 50 < screenY) {
                                        currentElement.height = currentElement.height + (screenY - slideElement.screenY)
                                    } else {
                                        currentElement.height = 50;
                                    }
                                    break;
                                }
                                default: {

                                }
                            }
                            slideElement = currentElement;
                            break;
                        }

                        case SlideObjectContentType.TEXT: {
                            let currentElement = slideElement as TextType;

                            switch (currentElement.resizePointType) {
                                case ResizeType.TOP: {
                                    if (slideElement.screenY + currentElement.height - 50 > screenY) {
                                        currentElement.positionY = currentElement.positionY + (screenY - slideElement.screenY);
                                        currentElement.height = currentElement.height - (screenY - slideElement.screenY);
                                    } else {
                                        currentElement.height = 50;
                                    }
                                    break;
                                }
                                case ResizeType.LEFT: {
                                    if (slideElement.screenX + currentElement.width - 50 > screenX) {
                                        currentElement.positionX = currentElement.positionX + (screenX - slideElement.screenX);
                                        currentElement.width = currentElement.width - (screenX - slideElement.screenX);
                                    } else {
                                        currentElement.width = 50;
                                    }
                                    break;
                                }
                                case ResizeType.RIGHT: {
                                    if ((slideElement.screenX - currentElement.width) + 50 < screenX) {
                                        currentElement.width = currentElement.width + (screenX - slideElement.screenX)
                                    } else {
                                        currentElement.width = 50;
                                    }
                                    break;
                                }
                                case ResizeType.BOTTOM: {
                                    if ((slideElement.screenY - currentElement.height) + 50 < screenY) {
                                        currentElement.height = currentElement.height + (screenY - slideElement.screenY)
                                    } else {
                                        currentElement.height = 50;
                                    }
                                    break;
                                }
                                default: {

                                }
                            }
                            slideElement = currentElement;
                            break;
                        }

                        case SlideObjectContentType.IMAGE: {
                            let currentElement = slideElement as ImageType;

                            switch (currentElement.resizePointType) {
                                case ResizeType.TOP: {
                                    if (slideElement.screenY + currentElement.height - 50 > screenY) {
                                        currentElement.positionY = currentElement.positionY + (screenY - slideElement.screenY);
                                        currentElement.height = currentElement.height - (screenY - slideElement.screenY);
                                    } else {
                                        currentElement.height = 50;
                                    }
                                    break;
                                }
                                case ResizeType.LEFT: {
                                    if (slideElement.screenX + currentElement.width - 50 > screenX) {
                                        currentElement.positionX = currentElement.positionX + (screenX - slideElement.screenX);
                                        currentElement.width = currentElement.width - (screenX - slideElement.screenX);
                                    } else {
                                        currentElement.width = 50;
                                    }
                                    break;
                                }
                                case ResizeType.RIGHT: {
                                    if ((slideElement.screenX - currentElement.width) + 50 < screenX) {
                                        currentElement.width = currentElement.width + (screenX - slideElement.screenX)
                                    } else {
                                        currentElement.width = 50;
                                    }
                                    break;
                                }
                                case ResizeType.BOTTOM: {
                                    if ((slideElement.screenY - currentElement.height) + 50 < screenY) {
                                        currentElement.height = currentElement.height + (screenY - slideElement.screenY)
                                    } else {
                                        currentElement.height = 50;
                                    }
                                    break;
                                }
                                default: {

                                }
                            }
                            slideElement = currentElement;
                            break;
                        }

                        case SlideObjectContentType.CIRCLE_FIGURE: {
                            let currentElement = slideElement as CircleType;
                            if ((slideElement.screenX - currentElement.radius) + 50 < screenX) {
                                currentElement.radius = currentElement.radius + (screenX - slideElement.screenX)
                            } else {
                                currentElement.radius = 50;
                            }
                            slideElement = currentElement;
                            break;
                        }

                    }

                    slideElement.screenX = screenX;
                    slideElement.screenY = screenY;
                }
            })
        }
    })
    return resultPresentation;
}

function moveUpSlideSelected(presentation: Presentation, selectedSlideId: string): Presentation {
    let newSlideList = presentation.slides;

    let slideIndex = 0;
    for (let slide of newSlideList) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideSelected = newSlideList[slideIndex]

    if (slideIndex !== 0) {
        newSlideList.splice(slideIndex, 1);
        newSlideList.splice(slideIndex - 1, 0, newSlideSelected);
    }

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function moveDownSlideSelected(presentation: Presentation, selectedSlideId: string): Presentation {
    let newSlideList = presentation.slides;

    let slideIndex = 0;
    for (let slide of newSlideList) {
        if (slide.id === selectedSlideId) break;
        slideIndex++;
    }

    let newSlideSelected = newSlideList[slideIndex]

    if (slideIndex !== newSlideList.length) {
        newSlideList.splice(slideIndex, 1);
        newSlideList.splice(slideIndex + 1, 0, newSlideSelected);
    }

    let resultPresentation: Presentation = {
        ...presentation,
        slides: newSlideList,
        selectedSlideId: selectedSlideId,
        selectedObjectId: undefined
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));

    return resultPresentation;
}

function undoPresentation(state: Presentation): Presentation {
    return undo();
}

function redoPresentation(state: Presentation): Presentation {
    return redo();
}

function setTextFont(presentation: Presentation, fontName: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    let textObject: TextType = object as TextType;
                    textObject.fontFamily = fontName;
                }
            })
        }
    })

    //setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextFontSize(presentation: Presentation, fontSize: number) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    let textObject: TextType = object as TextType;
                    textObject.fontSize = fontSize;
                }
            })
        }
    })

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextFontBold(presentation: Presentation, value: boolean) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    let textObject: TextType = object as TextType;
                    textObject.isBold = value;
                }
            })
        }
    })

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextFontItalics(presentation: Presentation, value: boolean) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    let textObject: TextType = object as TextType;
                    textObject.isItalic = value;
                }
            })
        }
    })

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextFontUnderlined(presentation: Presentation, value: boolean) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    let textObject: TextType = object as TextType;
                    textObject.isUnderlined = value;
                }
            })
        }
    })

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function bringToBack(presentation: Presentation, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let objectIndex = 0;
    let slide = resultPresentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];
    objectIndex = slide.objects.map(object => object.id).indexOf(selectedObjectId);

    slide.objects.splice(objectIndex, 1);
    slide.objects.splice(0, 0, object);

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function bringDownward(presentation: Presentation, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let objectIndex = 0;
    let slide = resultPresentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];
    objectIndex = slide.objects.map(object => object.id).indexOf(selectedObjectId);

    if (objectIndex !== 0) {
        slide.objects.splice(objectIndex, 1);
        slide.objects.splice(objectIndex - 1, 0, object);
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function bringUpward(presentation: Presentation, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let objectIndex = 0;
    let slide = resultPresentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];
    objectIndex = slide.objects.map(object => object.id).indexOf(selectedObjectId);

    if (objectIndex !== slide.objects.length) {
        slide.objects.splice(objectIndex, 1);
        slide.objects.splice(objectIndex + 1, 0, object);
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function bringToFront(presentation: Presentation, selectedObjectId: string): Presentation {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let objectIndex = 0;
    let slide = resultPresentation.slides.filter(slide => slide.id === resultPresentation.selectedSlideId)[0];
    let object = slide.objects.filter(object => object.id === resultPresentation.selectedObjectId)[0];
    objectIndex = slide.objects.map(object => object.id).indexOf(selectedObjectId);

    if (objectIndex !== slide.objects.length) {
        slide.objects.splice(objectIndex, 1);
        slide.objects.splice(slide.objects.length, 0, object);
    }

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextValue(presentation: Presentation, value: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    let textObject: TextType = object as TextType;
                    textObject.value = value;
                }
            })
        }
    })

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextColor(presentation: Presentation, value: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let slide: Slide = presentation.slides.filter(element => element.id === presentation.selectedSlideId)[0];
    let element = slide.objects.filter(element => element.id === presentation.selectedObjectId)[0];
    let varElement: TextType = element as TextType;
    varElement.fontColor = value;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setTextBackgroundColor(presentation: Presentation, value: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let slide: Slide = presentation.slides.filter(element => element.id === presentation.selectedSlideId)[0];
    let element = slide.objects.filter(element => element.id === presentation.selectedObjectId)[0];
    let varElement: TextType = element as TextType;
    varElement.borderColor = value;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setBorderColor(presentation: Presentation, value: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let slide: Slide = presentation.slides.filter(element => element.id === presentation.selectedSlideId)[0];
    let element = slide.objects.filter(element => element.id === presentation.selectedObjectId)[0];
    let varElement: TriangleType = element as TriangleType;
    varElement.borderColor = value;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setBackgroundColor(presentation: Presentation, value: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let slide: Slide = presentation.slides.filter(element => element.id === presentation.selectedSlideId)[0];
    let element = slide.objects.filter(element => element.id === presentation.selectedObjectId)[0];
    let varElement: TriangleType = element as TriangleType;
    varElement.fillColor = value;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function setSlideBackgroundColor(presentation: Presentation, value: string) {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let slide = resultPresentation.slides.filter(element => element.id === presentation.selectedSlideId)[0];
    slide.backgroundColor = value;

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
} 

function setSlideBackgroundImage(presentation: Presentation, base64Content: string = '') {
    let resultPresentation: Presentation = {
        ...presentation
    }

    let slide = resultPresentation.slides.filter(element => element.id === presentation.selectedSlideId)[0];
    slide.backgroundImage = base64Content;

    console.log(slide);

    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation;
}

function addPresentation(presentation: Presentation, value: Presentation) {
    let resultPresentation: Presentation = {
        ...value
    }
    console.log(resultPresentation);
    setPresentationToStorage(resultPresentation);
    setNewState(JSON.parse(JSON.stringify(resultPresentation)));
    return resultPresentation
}

export const presentationReducer = (state: Presentation = getPresentationFromStorage(), action: PresentationAction | SlideAction | TextAction | ToolbarAction): Presentation => {
    switch (action.type) {
        case PresentationActionType.SET_SLIDE_SELECTED:
            return setSlideSelected(state, action.slideId);
        case PresentationActionType.ADD_SLIDE:
            return addSlideSelected(state, action.slideId);
        case PresentationActionType.REMOVE_SLIDE:
            return removeSlideSetected(state, action.slideId);
        case PresentationActionType.MOVE_UP_SLIDE:
            return moveUpSlideSelected(state, action.slideId);
        case PresentationActionType.MOVE_DOWN_SLIDE:
            return moveDownSlideSelected(state, action.slideId);
        case SlideActionType.SET_OBJECT_SELECTED:
            return setObjectSelected(state, action.objectId);
        case SlideActionType.ADD_OBJECT:
            return addObject(state, action.slideId, action.objectType, action.base64Content);
        case SlideActionType.REMOVE_OBJECT:
            return removeObject(state, action.slideId, action.objectId);
        case SlideActionType.SET_OBJECT_DRAGGABLE:
            return setObjectDraggable(state, action.objectId, action.screenX, action.screenY);
        case SlideActionType.UNSET_OBJECT_DRAGGABLE:
            return unsetObjectDraggable(state, action.objectId);
        case SlideActionType.MOVE_OBJECT:
            return moveObject(state, action.objectId, action.screenX, action.screenY);
        case SlideActionType.SET_OBJECT_RESIZABLE:
            return setObjectResizable(state, action.objectId, action.screenX, action.screenY, action.pointType);
        case SlideActionType.UNSET_OBJECT_RESIZABLE:
            return unsetObjectResizable(state, action.objectId);
        case SlideActionType.RESIZE_OBJECT:
            return resizeObject(state, action.objectId, action.screenX, action.screenY);
        case SlideActionType.BRING_TO_FRONT:
            return bringToFront(state, action.objectId);
        case SlideActionType.BRING_TO_BACK:
            return bringToBack(state, action.objectId);
        case SlideActionType.BRING_UPWARD:
            return bringUpward(state, action.objectId);
        case SlideActionType.BRING_DOWNWARN:
            return bringDownward(state, action.objectId);
        case PresentationActionType.RENAME:
            return renamePresentation(state, action.name);
        case PresentationActionType.UNDO:
            return undoPresentation(state);
        case PresentationActionType.REDO:
            return redoPresentation(state);
        case TextActionType.SET_FONT:
            return setTextFont(state, action.fontName);
        case TextActionType.SET_FONT_SIZE:
            return setTextFontSize(state, action.size);
        case TextActionType.SET_FONT_BOLD:
            return setTextFontBold(state, action.value);
        case TextActionType.SET_FONT_ITALICS:
            return setTextFontItalics(state, action.value);
        case TextActionType.SET_FONT_UNDERLINED:
            return setTextFontUnderlined(state, action.value);
        case TextActionType.SET_TEXT_VALUE:
            return setTextValue(state, action.value);
        case ToolbarActionType.TEXT_COLOR :
            return setTextColor(state, action.value);
        case ToolbarActionType.TEXT_BACKGROUND_COLOR:
            return setTextBackgroundColor(state, action.value);
        case ToolbarActionType.BORDER_COLOR:
            return setBorderColor(state, action.value);
        case ToolbarActionType.BACKGROUND_COLOR:
            return setBackgroundColor(state, action.value);
        case ToolbarActionType.SLIDE_BACKGROUND_COLOR:
            return setSlideBackgroundColor(state, action.value);
        case SlideActionType.SLIDE_BACKGROUND_IMAGE:
            return setSlideBackgroundImage(state, action.base64Content);
        case PresentationActionType.ADD_NEW_PRESENTATION:
            return addPresentation(state, action.value);
        default:
            return state
    }
}


