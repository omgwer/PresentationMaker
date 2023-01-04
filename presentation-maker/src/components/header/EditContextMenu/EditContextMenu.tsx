import { useState } from "react";
import { AppProps } from "../../../types/AppProps"
import {usePresentationActions} from "../../../state/hooks/UsePresentationActions";
import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";

//TODO Context Menu Factory
//Normilize css

function EditContextMenu(){
    const {removeSlide} = usePresentationActions();

    const presentation = useTypedSelector(state => state.presentation);

    return (
        <div>
            <button>Отменить</button>
            <button>Повторить</button>
            <button>Вырезать</button>
            <button>Копировать</button>
            <button>Вставить</button>
            <button onClick={() => {
                var selectedUniqueIds = presentation?.selectedSlideId;
                if (selectedUniqueIds !== undefined)
                    removeSlide(selectedUniqueIds);
            }}>Удалить</button>
        </div>
    )
}

export {
    EditContextMenu
}