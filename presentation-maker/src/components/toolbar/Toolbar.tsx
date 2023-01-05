import styles from "./Toolbar.module.css"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";
import {useSlideActions} from "../../state/hooks/UseSlidesActions";
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";
import {canRedo, canUndo} from "../../state/stateManager/StateManager";

function Toolbar() {

    const {addSlide, removeSlide, undoPresentation, redoPresentation, moveUpSlide, moveDownSlide} = usePresentationActions();
    const {addObject} = useSlideActions();
    const presentation = useTypedSelector(state => state);

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button} onClick={() => {addSlide(presentation.selectedSlideId)}}>
                    <span id="addSlide" className={styles.addSlide}/>
                </button>

                <button className={styles.button + " " + styles.removeSlide} onClick={() => {
                    removeSlide(presentation.selectedSlideId)
                }}></button>

                <button id="moveUpSlide" className={styles.button + " " + styles.moveUpSlide}
                    onClick={() => {
                        if (presentation.selectedSlideId) {moveUpSlide(presentation.selectedSlideId)}
                    }}
                ></button>

                <button id="moveDownSlide" className={styles.button + " " + styles.moveDownSlide} onClick={() => {
                    if (presentation.selectedSlideId) {moveDownSlide(presentation.selectedSlideId)}
                }}></button>

                <div className={styles.separetor}></div>

                {/*//TODO поменять класс на неактивный (добавить стиль), в случае, если canUndo() === false 
                    Используй button?.setAttribute('disabled', '');
                */}
                <button className={styles.button + " " + styles.cancel} onClick={() => {
                    if (canUndo()) {
                        undoPresentation();
                    }
                }}>
                </button>

                {/*//TODO поменять класс на неактивный, в случае, если canRedo() === false*/}
                <button className={styles.button + " " + styles.repeat} onClick={() => {
                    if (canRedo()) {
                        redoPresentation();
                    }
                }}>
                </button>

                <button className={styles.button + " " + styles.target}>
                </button>

                <button className={styles.button + " " + styles.addBlock}>
                </button>

                <button className={styles.button + " " + styles.addImage}>
                </button>

                <button className={styles.button + " " + styles.addFigure} onClick={() => {
                    if (presentation.selectedSlideId !== undefined) {
                        addObject(presentation.selectedSlideId)
                    }
                }}></button>
            </div>
        </div>
    )
}

export {
    Toolbar
}