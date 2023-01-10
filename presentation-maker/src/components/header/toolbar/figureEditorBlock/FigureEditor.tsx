import styles from "./FigureEditor.module.css";
import React, {useRef} from "react";
import {Palette} from "../palette/Palette";
import {useTypedSelector} from "../../../../state/hooks/UseTypedSelector";
import { useSlideActions } from "../../../../state/hooks/UseSlidesActions";

function FigureEditorBlock() {

    const presentation = useTypedSelector(state => state);
    const paletteWrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const paletteWrapperBackgroundRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const {
        bringToFront,
        bringUpward,
        bringDownward,
        bringToBack
    } = useSlideActions()

    function openBorderPalette() {
        paletteWrapperRef.current?.classList.toggle(styles.hidden);
    }

    function openBackgroundPalette() {
        paletteWrapperBackgroundRef.current?.classList.toggle(styles.hidden);
    }

    return (
        <>
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

            <button className={styles.button}
                    title="Цвет границы"
            >
                <span id="addImage"
                      onClick={() => openBorderPalette()}
                      className={styles.fontColor + " " + styles.pictureWrapper}/>
                <div ref={paletteWrapperRef}
                     className={styles.paletteWrapper + " " + styles.hidden}
                     onMouseLeave={() => openBorderPalette()}
                >
                    <div className={styles.circleButton + " " + styles.colorBlack}></div>
                    <div className={styles.circleButton + " " + styles.colorBlackLight}></div>
                    <div className={styles.circleButton + " " + styles.colorBlackVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorBlackGray}></div>
                    <div className={styles.circleButton + " " + styles.colorWhite}></div>

                    <div className={styles.circleButton + " " + styles.colorRed}></div>
                    <div className={styles.circleButton + " " + styles.colorRedLight}></div>
                    <div className={styles.circleButton + " " + styles.colorRedVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorRedGray}></div>
                    <div className={styles.circleButton + " " + styles.colorRedGrayLight}></div>

                    <div className={styles.circleButton + " " + styles.colorOrange}></div>
                    <div className={styles.circleButton + " " + styles.colorOrangeLight}></div>
                    <div className={styles.circleButton + " " + styles.colorOrangeVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorOrangeGray}></div>
                    <div className={styles.circleButton + " " + styles.colorOrangeGrayLight}></div>

                    <div className={styles.circleButton + " " + styles.colorYellow}></div>
                    <div className={styles.circleButton + " " + styles.colorYellowLight}></div>
                    <div className={styles.circleButton + " " + styles.colorYellowVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorYellowGray}></div>
                    <div className={styles.circleButton + " " + styles.colorYellowGrayLight}></div>

                    <div className={styles.circleButton + " " + styles.colorGreen}></div>
                    <div className={styles.circleButton + " " + styles.colorGreenLight}></div>
                    <div className={styles.circleButton + " " + styles.colorGreenVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorGreenGray}></div>
                    <div className={styles.circleButton + " " + styles.colorGreenGrayLight}></div>

                    <div className={styles.circleButton + " " + styles.colorBlue}></div>
                    <div className={styles.circleButton + " " + styles.colorBlueLight}></div>
                    <div className={styles.circleButton + " " + styles.colorBlueVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorBlueGray}></div>
                    <div className={styles.circleButton + " " + styles.colorBlueGrayLight}></div>

                    <div className={styles.circleButton + " " + styles.colorPurple}></div>
                    <div className={styles.circleButton + " " + styles.colorPurpleLight}></div>
                    <div className={styles.circleButton + " " + styles.colorPurpleVeryLight}></div>
                    <div className={styles.circleButton + " " + styles.colorPurpleGray}></div>
                    <div className={styles.circleButton + " " + styles.colorPurpleGrayLight}></div>
                </div>
            </button>

            <button className={styles.button}
                    title="Цвет фона">
                <span id="addImage"
                      onClick={() => openBackgroundPalette()}
                      className={styles.backgroundColor + " " + styles.pictureWrapper}/>
                <div ref={paletteWrapperBackgroundRef} className={styles.paletteWrapper + " " + styles.hidden}>
                    <Palette/>
                </div>
            </button>
        </>
    )
}

export {
    FigureEditorBlock
}