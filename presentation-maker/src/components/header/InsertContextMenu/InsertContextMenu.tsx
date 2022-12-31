import { useState } from "react";
import { AddSlide } from "../../../functions/presentationFuncs";
import { dispatch } from "../../../state"
import { AppProps } from "../../../types/appProps"

function InsertContextMenu(prop: AppProps){
    const [state, setState] = useState('');
    return (
        <div>
            <button onClick={() => {
                dispatch(AddSlide, state)
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