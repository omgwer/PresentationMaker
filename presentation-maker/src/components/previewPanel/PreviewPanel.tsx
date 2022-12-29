import { AppProps } from "../../types/appProps"
import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"
import styles from "./PreviewPanel.module.css"

function PreviewPanel(prop: AppProps) {
    const listItems = prop.presentation.slides.map((slide) =>
                <PreviewPanelSlide key={slide.id}/>
            )
    return(
        <div className={styles.previewPanel}>
            {listItems}
        </div>
    )
}

export {
    PreviewPanel
}