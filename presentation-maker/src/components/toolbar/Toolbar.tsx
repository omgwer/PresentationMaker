import styles from "./Toolbar.module.css"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";
import {useSlideActions} from "../../state/hooks/UseSlidesActions";
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";

function Toolbar() {

    const {addSlide, removeSlide, undoPresentation, redoPresentation} = usePresentationActions();
    const {addObject} = useSlideActions();
    const presentation = useTypedSelector(state => state);

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>
                <button className={styles.button + " " + styles.addSlide} onClick={() => {
                    addSlide(presentation.selectedSlideId)
                }}></button>
                <button className={styles.button + " " + styles.removeSlide} onClick={() => {
                    removeSlide(presentation.selectedSlideId)
                }}></button>

                <button className={styles.button + " " + styles.cancel} onClick={() => {
                    undoPresentation();
                }}>
                </button>

                <button className={styles.button + " " + styles.repeat} onClick={() => {
                    redoPresentation();
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