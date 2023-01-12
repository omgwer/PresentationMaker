import {Header} from '../header/Header';
import {Toolbar} from '../header/toolbar/Toolbar';
import {Workspace} from '../workspace/Workspace';
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";
import {canRedo, canUndo, getLastStay} from "../../state/stateManager/StateManager";
import {useSlideActions} from "../../state/hooks/UseSlidesActions";
import {Presentation} from "../../types/PresentationType";
import styles from "./App.module.css";
import React from "react";

const App: React.FC = () => {
    const {addObject, removeObject} = useSlideActions();
    const {
        addSlide,
        removeSlide,
        undoPresentation,
        redoPresentation,
        moveUpSlide,
        moveDownSlide,
    } = usePresentationActions();

    const presentation = useTypedSelector(state => state);

    function savePresentationToJson(newVar: Presentation) {
        let presentationJson = JSON.stringify(newVar);
        let blob = new Blob([presentationJson], {type: "text/plain"});
        let link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", presentation.name + ".json");
        link.click();
    }

    document.body.addEventListener('keydown', event => {
        if (event.defaultPrevented)
            return
        const KEY = event.key.toUpperCase()
        const CTRL = event.ctrlKey
        const SHIFT = event.shiftKey
        switch (KEY) {
            case CTRL && SHIFT && 'Z' : {
                if (canRedo())
                    redoPresentation()
                event.preventDefault();
                break
            }
            case CTRL && 'Z' : {
                if (canUndo())
                    undoPresentation()
                event.preventDefault();
                break
            }
            case CTRL && 'D' : {
                addSlide(presentation.selectedSlideId);
                event.preventDefault();
                break
            }
            case CTRL && 'S' : {
                let varPresentation: Presentation = getLastStay();
                savePresentationToJson(varPresentation);
                event.preventDefault();
                break
            }
            case 'DELETE' : {
                let varPresentation: Presentation = getLastStay();
                if (varPresentation.selectedSlideId !== undefined && varPresentation.selectedObjectId !== undefined)
                    removeObject(varPresentation.selectedSlideId, varPresentation.selectedObjectId);
                event.preventDefault();
                break
            }

            case CTRL && 'X' : {
                let varPresentation: Presentation = getLastStay();
                if (varPresentation.selectedSlideId !== undefined)
                    removeSlide(varPresentation.selectedSlideId);
                event.preventDefault();
                break
            }

            case 'F1' : {
                let popup = document.getElementById("popup");
                if (popup !== undefined && popup !== null) {
                    popup.classList.toggle(styles.hidden)
                }
                event.preventDefault();
                break
            }
        }

    })

    return (
        <div>
            <div
                onClick={() => {
                    let popup = document.getElementById("popup");
                    console.log(popup)
                    if (popup !== undefined && popup !== null && !popup.classList.contains(styles.hidden)) {
                        popup.classList.add(styles.hidden)
                    }
                }}
                id={"popup"}
                className={styles.overlay + " " + styles.hidden}>
                <div className={styles.popup}>
                    <h1 className={styles.title}>Список макросов:</h1>
                    <span className={styles.description}>
                        <span>Вызов справки</span>
                        <b>F1</b>
                    </span>

                    <span className={styles.description}>
                        <span>Отменить</span>
                        <b>CTRL + Z</b>
                    </span>
                    <span className={styles.description}>
                        <span>Добавить слайд</span>
                        <b>CTRL + D</b>
                    </span>
                    <span className={styles.description}>
                        <span>Сохранить презентацию</span>
                        <b>CTRL + S</b>
                    </span>
                    <span className={styles.description}>
                        <span>Удалить выбранный слайд</span>
                        <b>CTRL + X</b>
                    </span>
                    <span className={styles.description}>
                        <span>Удалить выбранный объект</span>
                        <b>DELETE</b>
                    </span>
                    <span className={styles.description}>
                        <span>Повторить</span>
                        <b>CTRL + SHIFT + Z</b>
                    </span>
                    <div className={styles.closePopup}></div>
                </div>
            </div>
            <Header/>
            <Toolbar/>
            <Workspace/>
        </div>
    );
};

export default App;

