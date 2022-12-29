import { useState } from "react";
import { RemoveSlide } from "../../../functions/presentationFuncs";
import { dispatch } from "../../../state";
import { AppProps } from "../../../types/appProps"

function EditContextMenu(prop: AppProps){
    const [state, setState] = useState('');
    return (
        <div>
            <button>Отменить</button>
            <button>Повторить</button>
            <button>Вырезать</button>
            <button>Копировать</button>
            <button>Вставить</button>
            <button onClick={() => {
                dispatch(RemoveSlide, state);
            }}>Удалить</button>
        </div>
    )
}

export {
    EditContextMenu
}