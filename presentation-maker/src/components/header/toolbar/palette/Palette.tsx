import styles from "./Palette.module.css";
import {useTypedSelector} from "../../../../state/hooks/UseTypedSelector";
import React from "react";
import {usePaletteAction} from "../../../../state/hooks/UsePaletteAction";

enum Colors {
    black = "rgba(0, 0, 0, 1)",
    colorBlackLight = "rgba(0, 0, 0, 0.54)",
    colorBlackVeryLight = "rgba(0, 0, 0, 0.31)",
    colorBlackGray = "rgba(0, 0, 0, 0.15)",
    colorWhite = "rgba(0, 0, 0, 0)",
    colorRed = "rgb(248, 0, 0)",
    colorRedLight = "rgba(255, 0, 0, 0.78)",
    colorRedVeryLight = "rgba(218, 9, 9, 0.35)",
    colorRedGray = "rgba(201, 38, 38, 0.32)",
    colorRedGrayLight = "rgba(245, 8, 8, 0.04)",
    colorOrange = "rgb(255, 131, 4)",
    colorOrangeLight = "rgba(255, 131, 4, 0.8)",
    colorOrangeVeryLight = "rgba(255, 131, 4, 0.6)",
    colorOrangeGray = "rgba(255, 131, 4, 0.39)",
    colorOrangeGrayLight = "rgba(255, 131, 4, 0.17)",
    colorYellow = "rgb(255, 190, 0)",
    colorYellowLight = "rgba(255, 190, 0, 0.8)",
    colorYellowVeryLight = "rgba(255, 190, 0, 0.6)",
    colorYellowGray = "rgba(255, 190, 0, 0.4)",
    colorYellowGrayLight = "rgba(255, 190, 0, 0.2)",
    colorGreen = "rgb(24, 255, 0)",
    colorGreenLight = "rgba(24, 255, 0, 0.8)",
    colorGreenVeryLight = "rgba(24, 255, 0, 0.6)",
    colorGreenGray = "rgba(24, 255, 0, 0.4)",
    colorGreenGrayLight = "rgba(24, 255, 0, 0.2)",
    colorBlue = "rgb(0, 91, 255)",
    colorBlueLight = "rgba(0, 91, 255, 0.8)",
    colorBlueVeryLight = "rgba(0, 91, 255, 0.6)",
    colorBlueGray = "rgba(0, 91, 255, 0.4)",
    colorBlueGrayLight = "rgba(0, 91, 255, 0.2)",
    colorPurple = "rgb(132, 0, 255)",
    colorPurpleLight = "rgba(132, 0, 255, 0.8)",
    colorPurpleVeryLight = "rgba(132, 0, 255, 0.6)",
    colorPurpleGray = "rgba(132, 0, 255, 0.4)",
    colorPurpleGrayLight = "rgba(132, 0, 255, 0.2)",
}

export enum ActionEnum {
    BORDER_COLOR,
    BACKGROUND_COLOR,
    TEXT_COLOR,
    BACKGROUND_TEXT_COLOR,
    SLIDE_BACKGROUND_COLOR
}

export type Action = {
    action: ActionEnum;
}

function Palette(action: Action) {
    const presentation = useTypedSelector(state => state);

    const {setBorderColor, setBackgroundColor, setTextBackgroundColor, setTextColor, setSlideBackgroundColor} = usePaletteAction();

    function changeColor(color: string) {

        switch (action.action) {
            case ActionEnum.BACKGROUND_COLOR: {
                setBackgroundColor(color);
                break;
            }
            case ActionEnum.BORDER_COLOR: {
                setBorderColor(color);
                break;
            }
            case ActionEnum.TEXT_COLOR: {
                setTextColor(color);
                break;
            }
            case ActionEnum.BACKGROUND_TEXT_COLOR: {
                setTextBackgroundColor(color);
                break;
            }
            case ActionEnum.SLIDE_BACKGROUND_COLOR: {
                setSlideBackgroundColor(color)
            }
        }
    }

    return (
        <div className={styles.paletteWrapper}>
            <div className={styles.circleButton + " " + styles.colorBlack}
                 onClick={() => {
                     changeColor(Colors.black);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlackLight}
                 onClick={() => {
                     changeColor(Colors.colorBlackLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlackVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorBlackVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlackGray}
                 onClick={() => {
                     changeColor(Colors.colorBlackGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorWhite}
                 onClick={() => {
                     changeColor(Colors.colorWhite);
                 }}
            ></div>

            <div className={styles.circleButton + " " + styles.colorRed}
                 onClick={() => {
                     changeColor(Colors.colorRed);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorRedLight}
                 onClick={() => {
                     changeColor(Colors.colorRedLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorRedVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorRedVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorRedGray}
                 onClick={() => {
                     changeColor(Colors.colorRedGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorRedGrayLight}
                 onClick={() => {
                     changeColor(Colors.colorRedGrayLight);
                 }}
            ></div>

            <div className={styles.circleButton + " " + styles.colorOrange}
                 onClick={() => {
                     changeColor(Colors.colorOrange);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorOrangeLight}
                 onClick={() => {
                     changeColor(Colors.colorOrangeLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorOrangeVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorOrangeVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorOrangeGray}
                 onClick={() => {
                     changeColor(Colors.colorOrangeGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorOrangeGrayLight}
                 onClick={() => {
                     changeColor(Colors.colorOrangeGrayLight);
                 }}
            ></div>

            <div className={styles.circleButton + " " + styles.colorYellow}
                 onClick={() => {
                     changeColor(Colors.colorYellow);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorYellowLight}
                 onClick={() => {
                     changeColor(Colors.colorYellowLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorYellowVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorYellowVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorYellowGray}
                 onClick={() => {
                     changeColor(Colors.colorYellowGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorYellowGrayLight}
                 onClick={() => {
                     changeColor(Colors.colorYellowGrayLight);
                 }}
            ></div>

            <div className={styles.circleButton + " " + styles.colorGreen}
                 onClick={() => {
                     changeColor(Colors.colorGreen);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorGreenLight}
                 onClick={() => {
                     changeColor(Colors.colorGreenLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorGreenVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorGreenVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorGreenGray}
                 onClick={() => {
                     changeColor(Colors.colorGreenGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorGreenGrayLight}
                 onClick={() => {
                     changeColor(Colors.colorGreenGrayLight);
                 }}
            ></div>

            <div className={styles.circleButton + " " + styles.colorBlue}
                 onClick={() => {
                     changeColor(Colors.colorBlue);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlueLight}
                 onClick={() => {
                     changeColor(Colors.colorBlueLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlueVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorBlueVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlueGray}
                 onClick={() => {
                     changeColor(Colors.colorBlueGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorBlueGrayLight}
                 onClick={() => {
                     changeColor(Colors.colorBlueGrayLight);
                 }}
            ></div>

            <div className={styles.circleButton + " " + styles.colorPurple}
                 onClick={() => {
                     changeColor(Colors.colorPurple);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorPurpleLight}
                 onClick={() => {
                     changeColor(Colors.colorPurpleLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorPurpleVeryLight}
                 onClick={() => {
                     changeColor(Colors.colorPurpleVeryLight);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorPurpleGray}
                 onClick={() => {
                     changeColor(Colors.colorPurpleGray);
                 }}
            ></div>
            <div className={styles.circleButton + " " + styles.colorPurpleGrayLight}
                 onClick={() => {
                     changeColor(Colors.colorPurpleGrayLight);
                 }}
            ></div>
        </div>
    )
}


export {
    Palette
}