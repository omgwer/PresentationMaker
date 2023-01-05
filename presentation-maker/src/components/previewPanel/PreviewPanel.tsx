import styles from "./PreviewPanel.module.css"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"

const PreviewPanel: React.FC = () => {

    const presentation = useTypedSelector(state => state);
    const listSlides = presentation?.slides.map((currentSlide, index) =>
        <PreviewPanelSlide key={currentSlide.id} slideId={currentSlide.id} slideOrderId={index}/>
    )

    return (
        <div className={styles.previewPanel}>
            {listSlides}
        </div>
    )
}

export {
    PreviewPanel
}