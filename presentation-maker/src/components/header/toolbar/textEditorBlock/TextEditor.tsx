import {Presentation} from "../../../../types/PresentationType";
import styles from "./TextEditor.module.css";
import fonts from "../../../../Fonts.module.css";

function TextEditorBlock(props: Presentation) {
    return (
        <>
        <div className={styles.changeFontWrapper}>
            <select className={styles.changeFontSelect}>
                <option>Inter</option>
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
                <span id="addImage" className={styles.boldText + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Курсив">
                <span id="addImage" className={styles.italicText + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Подчеркивание">
                <span id="addImage" className={styles.underlineText + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Цвет текста">
                <span id="addImage" className={styles.fontColor  + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Цвет фона текста">
                <span id="addImage" className={styles.backgroundColor  + " " + styles.pictureWrapper}/>
            </button>
        </>
    )
}


export {
    TextEditorBlock
}