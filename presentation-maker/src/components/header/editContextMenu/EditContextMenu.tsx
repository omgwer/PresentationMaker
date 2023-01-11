import {usePresentationActions} from "../../../state/hooks/UsePresentationActions";
import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";
import styles from "./EditContextMenu.module.css";
import {canRedo, canUndo} from "../../../state/stateManager/StateManager";
import {useSlideActions} from "../../../state/hooks/UseSlidesActions";

function EditContextMenu() {

    const presentation = useTypedSelector(state => state);

    const {
        undoPresentation,
        redoPresentation,
    } = usePresentationActions();

    const {removeObject} = useSlideActions();

    return (
        <>
            <ul className={styles.menuWrapper}>
                <li className={styles.menuList}>
                    <div className={styles.cancelIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                if (canUndo()) undoPresentation();
                            }}
                    >
                        Отменить
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.redoIcon}></div>
                    <button className={styles.menuButton}
                            onClick={(e) => {
                                if (canRedo()) redoPresentation();
                            }}>
                        Повторить
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.deleteIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                if (presentation.selectedSlideId !== undefined && presentation.selectedObjectId !== undefined) {
                                    removeObject(presentation.selectedSlideId, presentation.selectedObjectId);
                                }
                            }}>
                        Удалить
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.copyIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {

                            }}>
                        Копировать
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.cutIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {

                            }}>
                        Вырезать
                    </button>
                </li>
            </ul>
        </>
    )
}

export {
    EditContextMenu
}