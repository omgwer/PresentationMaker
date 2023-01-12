import styles from "./FigureEditor.module.css";
import React, {useRef} from "react";
import {ActionEnum, Palette} from "../palette/Palette";

function FigureEditorBlock() {
    const paletteWrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const paletteWrapperBackgroundRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    function openBorderPalette() {
        paletteWrapperRef.current?.classList.toggle(styles.hidden);
    }

    function openBackgroundPalette() {
        paletteWrapperBackgroundRef.current?.classList.toggle(styles.hidden);
    }

    return (
        <>
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
                    <Palette action={ActionEnum.BACKGROUND_COLOR}/>
                </div>
            </button>
        </>
    )
}

export {
    FigureEditorBlock
}