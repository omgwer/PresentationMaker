import { PreviewPanelSlide } from "../PreviewPanelSlide/PreviewPanelSlide"
import styles from "./PreviewPanel.module.css"

function PreviewPanel() {
    return(
        <div className={styles.previewPanel}>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
            <PreviewPanelSlide/>
        </div>
    )
}

export {
    PreviewPanel
}