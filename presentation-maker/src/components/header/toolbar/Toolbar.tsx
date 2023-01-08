import styles from "./Toolbar.module.css"
import fonts from "../../../Fonts.module.css"
import { useSlideActions } from "../../../state/hooks/UseSlidesActions"
import { useTypedSelector } from "../../../state/hooks/UseTypedSelector"
import { canRedo, canUndo } from "../../../state/stateManager/StateManager"
import { usePresentationActions } from "../../../state/hooks/UsePresentationActions"
import { SlideObjectContentType } from "../../../types/SlideObjectType"

{/*//TODO (для всех кнопок) поменять класс на неактивный (добавить стиль), в случае, если canUndo() === false 
    Используй button?.setAttribute('disabled', ''); На него уже навешаны все стили
*/}

const Toolbar: React.FC = () => {

    const {
        addSlide,
        removeSlide,
        undoPresentation,
        redoPresentation,
        moveUpSlide,
        moveDownSlide
    } = usePresentationActions();

    const {addObject,removeObject} = useSlideActions();
    const presentation = useTypedSelector(state => state);

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarWrapper}>

                <button className={styles.button}
                        title="Добавление слайда"
                        onClick={() => {
                            addSlide(presentation.selectedSlideId)
                        }}>
                    <span id="addSlide" className={styles.addSlide  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Удаление текущего слайда"
                        onClick={() => {
                            removeSlide(presentation.selectedSlideId)
                        }}>
                    <span id="removeSlide" className={styles.removeSlide  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Слайд вверх"
                        onClick={() => {
                            if (presentation.selectedSlideId) moveUpSlide(presentation.selectedSlideId);
                        }}>
                    <span id="moveUpSlide" className={styles.moveUpSlide  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Слайд вниз"
                        onClick={() => {
                            if (presentation.selectedSlideId) moveDownSlide(presentation.selectedSlideId);
                        }}>
                    <span id="moveDownSlide" className={styles.moveDownSlide  + " " + styles.pictureWrapper}/>
                </button>

                <div className={styles.separator}></div>

                <button className={styles.button}
                        title="Отменить"
                        onClick={() => {
                            if (canUndo()) undoPresentation();
                        }}>
                    <span id="cancel" className={styles.cancel  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Повторить"
                        onClick={() => {
                            if (canRedo()) redoPresentation();
                        }}>
                    <span id="repeat" className={styles.repeat  + " " + styles.pictureWrapper}/>
                </button>

                <div className={styles.separator}></div>

                <button className={styles.button}
                        title="Вставить текст"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.TEXT);
                            }
                        }}>
                    <span id="addText" className={styles.addText  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить изображение"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.IMAGE);
                            }
                        }}>
                    <span id="addImage" className={styles.addImage  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить фигуру: прямоугольник"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.RECTANGLE_FIGURE);
                            }
                        }}>
                    <span id="addFigureRectangle" className={styles.addFigureRectangle  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить фигуру: круг"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.CIRCLE_FIGURE);
                            }
                        }}>
                    <span id="addFigureCircle" className={styles.addFigureCircle  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить фигуру: треугольник"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined) {
                                addObject(presentation.selectedSlideId, SlideObjectContentType.TRIANGLE_FIGURE);
                            }
                        }}>
                    <span id="addFigureTriangle" className={styles.addFigureTriangle  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Удалить фигуру"
                        onClick={() => {
                            if (presentation.selectedSlideId !== undefined && presentation.selectedObjectId !== undefined) {
                                removeObject(presentation.selectedSlideId, presentation.selectedObjectId);
                            }
                        }}>
                    <span id="deleteObject" className={styles.deleteObject  + " " + styles.pictureWrapper}/>
                </button>

                <div className={styles.separator}></div>

                <div className={styles.changeFontWrapper}>
                    <select className={styles.changeFontSelect}>
                        <option >Inter</option>
                        <option className={fonts.fontRoboto}>Roboto</option>
                        <option className={fonts.fontKanit}>Kanit</option>
                    </select>
                </div>

                <div className={styles.changeTextSizeWrapper}>
                    <button className={styles.changeTextSize + " " + styles.leftButton}
                            title="Убавить размер шрифта">
                        <span id="deleteObject" className={styles.removeSlide + " " + styles.pictureWrapper}/>
                    </button>
                    <span className={styles.changeTextSizeNumber}>25</span>
                    <button className={styles.changeTextSize + " " + styles.rightButton}
                            title="Увеличить размер шрифта">
                        <span id="deleteObject" className={styles.addSlide + " " + styles.pictureWrapper}/>
                    </button>
                </div>

                <button className={styles.button}
                        title="Жирный">
                    <span id="addImage" className={styles.boldText  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Курсив">
                    <span id="addImage" className={styles.italicText  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Подчеркивание">
                    <span id="addImage" className={styles.underlineText  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Цвет текста">
                    <span id="addImage" className={styles.fontColor  + " " + styles.pictureWrapper}/>
                </button>

                <button className={styles.button}
                        title="Вставить изображение">
                    <span id="addImage" className={styles.backgroundColor  + " " + styles.pictureWrapper}/>
                </button>

            </div>
        </div>
    )
}

export {
    Toolbar
}