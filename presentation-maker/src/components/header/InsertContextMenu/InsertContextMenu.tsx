import { useState } from "react";
import { AddSlide } from "../../../functions/PresentationFuncs";
import { AppProps } from "../../../types/AppProps"
import {useSlideActions} from "../../../state/hooks/UseSlidesActions";

function InsertContextMenu(){
    const {addSlide} = useSlideActions();
    return (
        <div>
            <button onClick={() => {
                addSlide();
            }}>Слайд</button>
            <button>Изображение</button>
            <button>Текстовое поле</button>
            <button>Фигура</button>
        </div>
    )
}

export {
    InsertContextMenu
}