import styles from "./TextEditor.module.css";
import React from "react";
import {useTextActions} from "../../../../state/hooks/UseTextActions";
import {TextType} from "../../../../types/SlideObjectType";
import {useTypedSelector} from "../../../../state/hooks/UseTypedSelector";
import {useSlideActions} from "../../../../state/hooks/UseSlidesActions";

function TextEditorBlock() {

    const presentation = useTypedSelector(state => state);

    const {setTextFont, setTextFontSize, setTextFontBold, setTextFontItalics, setTextFontUnderlined, setTextValue} = useTextActions();
    const {
        bringToFront,
        bringUpward,
        bringDownward,
        bringToBack
    } = useSlideActions()

    const fontsArray = [
        {value: 'Inter', text: 'Inter'},
        {value: 'Roboto', text: 'Roboto'},
        {value: 'Kanit', text: 'Kanit'},
        {value: 'Times New Roman', text: 'Times New Roman'}
    ];

    let defaultFontFamily: string = fontsArray[0].value;
    let defaultFontSize: number = 20;
    let isBold: boolean = false;
    let isItalics: boolean = false;
    let isUnderlined: boolean = false;
    let defaultTextValue: string = '';

    let selectedObject: TextType | undefined = undefined;

    presentation.slides.forEach(slide => {
        if (slide.id === presentation.selectedSlideId) {
            slide.objects.forEach(object => {
                if (object.id === presentation.selectedObjectId) {
                    selectedObject = (object as TextType);
                    defaultFontFamily = selectedObject.fontFamily;
                    defaultFontSize = selectedObject.fontSize;
                    isBold = selectedObject.isBold;
                    isItalics = selectedObject.isItalic;
                    isUnderlined = selectedObject.isUnderlined;
                    defaultTextValue = selectedObject.value;
                }
            })
        }
    });


    return (
        <div className={styles.toolbarWrapper}>
            <button className={styles.button}
                    title="На передний план"
                    onClick={() => {
                        if (presentation.selectedObjectId) {
                            bringToFront(presentation.selectedObjectId)
                        }
                    }}>
                <span id="bringToFront" className={styles.bringToFront + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Выше"
                    onClick={() => {
                        if (presentation.selectedObjectId) {
                            bringUpward(presentation.selectedObjectId)
                        }
                    }}>
                <span id="bringUpward" className={styles.bringUpward + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Ниже"
                    onClick={() => {
                        if (presentation.selectedObjectId) {
                            bringDownward(presentation.selectedObjectId)
                        }
                    }}>
                <span id="bringDownward" className={styles.bringDownward + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="На задний план"
                    onClick={() => {
                        if (presentation.selectedObjectId) {
                            bringToBack(presentation.selectedObjectId)
                        }
                    }}>
                <span id="bringToBack" className={styles.bringToBack + " " + styles.pictureWrapper}/>
            </button>

            <div className={styles.separator}></div>

            <div className={styles.changeFontWrapper}>
                <select className={styles.changeFontSelect}
                        onChange={(event) => {
                            let fontFamily: string = event.target.value
                            setTextFont(fontFamily);
                        }}
                        value={defaultFontFamily}>
                    {fontsArray.map(opt => (<option key={opt.value} value={opt.value}>{opt.text}</option>))}
                </select>
            </div>

            <div className={styles.changeTextSizeWrapper}>
                <button className={styles.changeTextSize + " " + styles.leftButton}
                        title="Убавить размер шрифта"
                        onClick={() => {
                            defaultFontSize--;
                            setTextFontSize(defaultFontSize);
                        }}>
                    <span id="deleteObject" className={styles.removeSlide + " " + styles.pictureWrapper}/>
                </button>
                <input type="number" className={styles.changeTextSizeNumber}
                       onChange={(e) => setTextFontSize(parseInt(e.target.value))}
                       value={defaultFontSize}>
                </input>
                <button className={styles.changeTextSize + " " + styles.rightButton}
                        title="Увеличить размер шрифта"
                        onClick={() => {
                            defaultFontSize++;
                            setTextFontSize(defaultFontSize);
                        }}>
                    <span id="deleteObject" className={styles.addSlide + " " + styles.pictureWrapper}/>
                </button>
            </div>

            <button className={styles.button}
                    title="Жирный"
                    onClick={() => {
                        setTextFontBold(!isBold);
                    }}>
                <span id="addImage" className={styles.boldText + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Курсив"
                    onClick={() => {
                        setTextFontItalics(!isItalics);
                    }}>
                <span id="addImage" className={styles.italicText + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Подчеркивание"
                    onClick={() => {
                        setTextFontUnderlined(!isUnderlined);
                    }}>
                <span id="addImage" className={styles.underlineText + " " + styles.pictureWrapper}/>
            </button>

            <button className={styles.button}
                    title="Цвет фона текста">
                <span id="addImage" className={styles.backgroundColor + " " + styles.pictureWrapper}/>
            </button>

            <div className={styles.changeTextWrapper}>
                <input type="text" className={styles.changeTextValue}
                       value={defaultTextValue}
                       title='Введите текст'
                       placeholder='Введите текст'
                       onChange={(e) => {
                           setTextValue(e.target.value);
                       }}></input>
            </div>
        </div>
    )
}


export {
    TextEditorBlock
}