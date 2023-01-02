import { AppProps } from "../../types/appProps"
import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"
import styles from "./PreviewPanel.module.css"

function PreviewPanel(prop: AppProps) {
    const listSlides = prop.presentation.slides.map((currentSlide) =>
                <PreviewPanelSlide key={currentSlide.id} presentation={prop.presentation} slide={currentSlide.id}/>
            )
    return(
        <div className={styles.previewPanel}>
            {listSlides}
        </div>
    )
}

export {
    PreviewPanel
}