import { useState } from "react";
import { RemoveSlide } from "../../../functions/presentationFuncs";
import { dispatch } from "../../../state";
import { AppProps } from "../../../types/appProps"
import {useSlideActions} from "../../../state/hooks/useSlidesActions";
import {usePresentationActions} from "../../../state/hooks/usePresentationActions";

//TODO Context Menu Factory
//Normilize css

function EditContextMenu(){
    const {removeSlide} = useSlideActions();
    const {getPresentation} = usePresentationActions();
    return (
        <div>
            <button>Отменить</button>
            <button>Повторить</button>
            <button>Вырезать</button>
            <button>Копировать</button>
            <button>Вставить</button>
            <button onClick={() => {
                removeSlide(0);
            }}>Удалить</button>
        </div>
    )
}

export {
    EditContextMenu
}