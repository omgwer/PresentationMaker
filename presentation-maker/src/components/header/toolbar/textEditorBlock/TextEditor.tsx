import styles from "./TextEditor.module.css";
import React, {useRef} from "react";
import {useTextActions} from "../../../../state/hooks/UseTextActions";
import {TextType} from "../../../../types/SlideObjectType";
import {useTypedSelector} from "../../../../state/hooks/UseTypedSelector";
import {ActionEnum, Palette} from "../palette/Palette";

function TextEditorBlock() {
    const textColorRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const textBackgroundColorRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const presentation = useTypedSelector(state => state);

    const {
        setTextFont,
        setTextFontSize,
        setTextFontBold,
        setTextFontItalics,
        setTextFontUnderlined
    } = useTextActions();

    function openTextColorPalette() {
        textColorRef.current?.classList.toggle(styles.hidden);
    }

    function openTextBackgroundColorPalette() {
        textBackgroundColorRef.current?.classList.toggle(styles.hidden);
    }

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
                    <span id="deleteObject" className={styles.decreaseFontSize + " " + styles.pictureWrapper}/>
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
                    <span id="deleteObject" className={styles.increaseFontSize + " " + styles.pictureWrapper}/>
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
                    title="Цвет текста">
                <span
                    onClick={() => openTextColorPalette()}
                    className={styles.fontColor + " " + styles.pictureWrapper}/>
                <div ref={textColorRef}
                     className={styles.hidden}
                     onMouseLeave={() => openTextColorPalette()}
                >
                    <Palette action={ActionEnum.TEXT_COLOR}/>
                </div>
            </button>

            <button className={styles.button}
                    title="Цвет фона текста"
            >
                <span
                    onClick={() => openTextBackgroundColorPalette()}
                    className={styles.backgroundColor + " " + styles.pictureWrapper}/>
                <div ref={textBackgroundColorRef}
                     className={styles.hidden}
                     onMouseLeave={() => openTextBackgroundColorPalette()}
                >
                    <Palette action={ActionEnum.BACKGROUND_TEXT_COLOR}/>
                </div>
            </button>
        </div>
    )
}


export {
    TextEditorBlock
}