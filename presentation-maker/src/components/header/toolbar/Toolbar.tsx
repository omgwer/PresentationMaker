import styles from "./Toolbar.module.css"
import {useSlideActions} from "../../../state/hooks/UseSlidesActions"
import {useTypedSelector} from "../../../state/hooks/UseTypedSelector"
import {canRedo, canUndo} from "../../../state/stateManager/StateManager"
import {usePresentationActions} from "../../../state/hooks/UsePresentationActions"
import {SlideObjectContentType} from "../../../types/SlideObjectType"
import React, {ReactNode} from "react";
import {TextEditorBlock} from "./textEditorBlock/TextEditor"
import {FigureEditorBlock} from "./figureEditorBlock/FigureEditor";

{/*//TODO (для всех кнопок) поменять класс на неактивный (добавить стиль), в случае, если canUndo() === false 
    Используй button?.setAttribute('disabled', ''); На него уже навешаны все стили
*/
}

function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

const Toolbar: React.FC = () => {

    const {
        addSlide,
        removeSlide,
        undoPresentation,
        redoPresentation,
        moveUpSlide,
        moveDownSlide,
    } = usePresentationActions();


    const {addObject, removeObject} = useSlideActions();
    const presentation = useTypedSelector(state => state);

    let fileSelector = buildFileSelector();
    fileSelector.onchange = (e) => {
        e.preventDefault();

        // @ts-ignore
        var file = fileSelector.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            // @ts-ignore
            addObject(presentation.selectedSlideId, SlideObjectContentType.IMAGE, reader.result);
        }
        reader.readAsDataURL(file);


    };

    let editBlock: ReactNode = <div></div>;

    let isFound: boolean = false;
    for (let slide of presentation.slides) {
        if (isFound) {
            break;
        }
        if (slide.id === presentation.selectedSlideId) {
            for (let element of slide.objects) {
                if (isFound) {
                    break;
                }
                if (element.id === presentation.selectedObjectId) {
                    switch (element.contentType) {
                        case SlideObjectContentType.TEXT:
                            editBlock = TextEditorBlock(presentation);
                            isFound = true;
                            break;
                        case SlideObjectContentType.CIRCLE_FIGURE:
                        case SlideObjectContentType.RECTANGLE_FIGURE:
                        case SlideObjectContentType.TRIANGLE_FIGURE:
                            editBlock = FigureEditorBlock(presentation);
                            isFound = true;
                            break;
                    }
                }
            }
        }
    }

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>

                <button className={styles.button}
                        title="Добавление слайда"
                        onClick={() => {
                            addSlide(presentation.selectedSlideId)
                        }}>
                    <span id="addSlide" className={styles.addSlide + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Удаление текущего слайда"
                        onClick={() => {
                            removeSlide(presentation.selectedSlideId)
                        }}>
                    <span id="removeSlide" className={styles.removeSlide + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Слайд вверх"
                        onClick={() => {
                            if (presentation.selectedSlideId) moveUpSlide(presentation.selectedSlideId);
                        }}>
                    <span id="moveUpSlide" className={styles.moveUpSlide + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Слайд вниз"
                        onClick={() => {
                            if (presentation.selectedSlideId) moveDownSlide(presentation.selectedSlideId);
                        }}>
                    <span id="moveDownSlide" className={styles.moveDownSlide + " " + styles.pictureWrapper}/>
                </button>

                <div className={styles.separator}></div>

                <button className={styles.button}
                        title="Отменить"
                        onClick={() => {
                            if (canUndo()) undoPresentation();
                        }}>
                    <span id="cancel" className={styles.cancel + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Повторить"
                        onClick={() => {
                            if (canRedo()) redoPresentation();
                        }}>
                    <span id="repeat" className={styles.repeat + " " + styles.pictureWrapper}/>
                </button>

                <div className={styles.separator}></div>

                <button className={styles.button}
                        title="Вставить текст"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.TEXT);
                            }
                        }}>
                    <span id="addText" className={styles.addText + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить изображение"
                        onClick={(e) => {
                            if (presentation.selectedSlideId !== undefined) {
                                e.preventDefault();
                                fileSelector.click();
                            }
                        }}>
                    <span id="addImage" className={styles.addImage + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить фигуру: прямоугольник"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.RECTANGLE_FIGURE);
                            }
                        }}>
                    <span id="addFigureRectangle" className={styles.addFigureRectangle + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить фигуру: круг"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.CIRCLE_FIGURE);
                            }
                        }}>
                    <span id="addFigureCircle" className={styles.addFigureCircle + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить фигуру: треугольник"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.TRIANGLE_FIGURE);
                            }
                        }}>
                    <span id="addFigureTriangle" className={styles.addFigureTriangle + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Удалить фигуру"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined && presentation.selectedObjectId !== undefined) {
                                removeObject(presentation.selectedSlideId, presentation.selectedObjectId);
                            }
                        }}>
                    <span id="deleteObject" className={styles.deleteObject + " " + styles.pictureWrapper}/>
                </button>

                <div className={styles.separator}></div>

                {editBlock}

                {/*<button className={styles.button}*/}
                {/*        title="Цвет текста">*/}
                {/*    <span id="addImage" className={styles.fontColor + " " + styles.pictureWrapper}/>*/}
                {/*</button>*/}

                {/*<button className={styles.button}*/}
                {/*        title="Вставить изображение">*/}
                {/*    <span id="addImage" className={styles.backgroundColor + " " + styles.pictureWrapper}/>*/}
                {/*</button>*/}

            </div>
        </div>
    )
}

export {
    Toolbar
}