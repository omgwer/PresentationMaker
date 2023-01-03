import { useState } from "react";
import { AddSlide } from "../../../functions/presentationFuncs";
import { dispatch } from "../../../state"
import { AppProps } from "../../../types/appProps"
import {useSlideActions} from "../../../state/hooks/useSlidesActions";

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