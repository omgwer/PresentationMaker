import styles from "./Toolbar.module.css"
import { useSlideActions } from "../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { canRedo, canUndo } from "../../state/stateManager/StateManager"
import { usePresentationActions } from "../../state/hooks/UsePresentationActions"

const Toolbar: React.FC = () => {

    const {addSlide, removeSlide, undoPresentation, redoPresentation, moveUpSlide, moveDownSlide} = usePresentationActions();
    const {addObject} = useSlideActions();
    const presentation = useTypedSelector(state => state);

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button}
                    onClick={() => { addSlide(presentation.selectedSlideId) }}>
                    <span id="addSlide" className={styles.addSlide}/>
                </button>

                <button className={styles.button}
                    onClick={() => { removeSlide(presentation.selectedSlideId) }}>
                    <span id="removeSlide" className={styles.removeSlide}/>
                </button>

                <button className={styles.button}
                    onClick={() => { if (presentation.selectedSlideId) moveUpSlide(presentation.selectedSlideId); }}>
                    <span id="moveUpSlide" className={styles.moveUpSlide}/>
                </button>

                <button className={styles.button}
                    onClick={() => { if (presentation.selectedSlideId) moveDownSlide(presentation.selectedSlideId); }}>
                    <span id="moveDownSlide" className={styles.moveDownSlide}/>
                </button>

                <div className={styles.separetor}></div>

                {/*//TODO (для всех кнопок) поменять класс на неактивный (добавить стиль), в случае, если canUndo() === false 
                    Используй button?.setAttribute('disabled', ''); На него уже навешаны все стили
                */}
                <button className={styles.button}
                    onClick={() => { if (canUndo()) undoPresentation(); }}>
                    <span id="cancel" className={styles.cancel}/>
                </button>

                <button className={styles.button}
                    onClick={() => { if (canRedo()) redoPresentation(); }}>
                    <span id="repeat" className={styles.repeat}/>
                </button>

                <div className={styles.separetor}></div>

                <button className={styles.button}>
                    <span id="addText" className={styles.addText}/>
                </button>

                <button className={styles.button}>
                    <span id="addImage" className={styles.addImage}/>
                </button>

                <button className={styles.button}
                    onClick={() => { if (presentation.selectedSlideId !== undefined) addObject(presentation.selectedSlideId); }}>
                    <span id="addFigure" className={styles.addFigure}/>
                </button>

                <button className={styles.button}>
                    <span id="deleteObject" className={styles.deleteObject}/>
                </button>
            </div>
        </div>
    )
}

export {
    Toolbar
}