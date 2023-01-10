import styles from "./FigureEditor.module.css";
import React, {useRef} from "react";
import {useTypedSelector} from "../../../../state/hooks/UseTypedSelector";
import {useSlideActions} from "../../../../state/hooks/UseSlidesActions";
import {ActionEnum, Palette} from "../palette/Palette";

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
                <span
                      onClick={() => openBorderPalette()}
                      className={styles.borderColor + " " + styles.pictureWrapper}/>
                <div ref={paletteWrapperRef}
                     className={styles.hidden}
                     onMouseLeave={() => openBorderPalette()}
                >
                    <Palette action={ActionEnum.BORDER_COLOR}/>
                </div>
            </button>

            <button className={styles.button}
                    title="Цвет фона">
                <span
                      onClick={() => openBackgroundPalette()}
                      className={styles.backgroundColor + " " + styles.pictureWrapper}/>
                <div ref={paletteWrapperBackgroundRef}
                     onMouseLeave={() => openBackgroundPalette()}
                     className={styles.hidden}>
                    <Palette  action={ActionEnum.BACKGROUND_COLOR}/>
                </div>
            </button>
        </>
    )
}

export {
    FigureEditorBlock
}