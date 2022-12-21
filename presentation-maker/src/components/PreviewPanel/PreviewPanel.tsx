import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"
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