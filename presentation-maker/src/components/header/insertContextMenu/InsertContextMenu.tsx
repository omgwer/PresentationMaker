import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";
import styles from "./InsertContextMenu.module.css";
import {useSlideActions} from "../../../state/hooks/UseSlidesActions";
import {SlideObjectContentType} from "../../../types/SlideObjectType";

function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

function InsertContextMenu() {
    const {addObject} = useSlideActions();

    const presentation = useTypedSelector(state => state);

    let fileSelector = buildFileSelector();
    fileSelector.onchange = (e) => {
        e.preventDefault();

        // @ts-ignore
        let file = fileSelector.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            // @ts-ignore
            addObject(presentation.selectedSlideId, SlideObjectContentType.IMAGE, reader.result);
        }
        reader.readAsDataURL(file);
    };

    return (
        <>
            <ul className={styles.menuWrapper}>
                <li className={styles.menuList}>
                    <div className={styles.addTextIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                if (presentation.selectedSlideId !== undefined) {
                                    addObject(presentation.selectedSlideId, SlideObjectContentType.TEXT);
                                }
                            }}
                    >
                        Текст
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.addPictureIcon}></div>
                    <button className={styles.menuButton}
                            onClick={(e) => {
                                if (presentation.selectedSlideId !== undefined) {
                                    e.preventDefault();
                                    fileSelector.click();
                                }
                            }}>
                        Изображение
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.addRectangleIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                if (presentation.selectedSlideId !== undefined) {
                                    addObject(presentation.selectedSlideId, SlideObjectContentType.RECTANGLE_FIGURE);
                                }
                            }}>
                        Прямоугольник
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.addCircleIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                if (presentation.selectedSlideId !== undefined) {
                                    addObject(presentation.selectedSlideId, SlideObjectContentType.CIRCLE_FIGURE);
                                }
                            }}>
                        Круг
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.addTriangleIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                if (presentation.selectedSlideId !== undefined) {
                                    addObject(presentation.selectedSlideId, SlideObjectContentType.TRIANGLE_FIGURE);
                                }
                            }}>
                        Треугольник
                    </button>
                </li>
            </ul>
        </>
    )
}

export {
    InsertContextMenu
}