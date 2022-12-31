import { AppProps } from "../../../types/appProps"

function FormatContextMenu(prop: AppProps){
    return (
        <div>
            <div>Изменить фон слайда</div>
            <div>Текст</div>
            <div>Границы</div>
            <div>Заливка фигур</div>
            <div>Переместить</div>
        </div>
    )
}

export {
    FormatContextMenu
}