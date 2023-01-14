import styles from "./PreviewPanel.module.css"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"

const PreviewPanel: React.FC = () => {

    const presentation = useTypedSelector(state => state);
    const listSlides = presentation?.slides.map((currentSlide, index) =>
        <PreviewPanelSlide
            key={currentSlide.id}
            slideId={currentSlide.id}
            slideIndex={index}
            viewPort="0 0 1536 735"
            backgroundColor={currentSlide.backgroundColor}
            backgroundImage={currentSlide.backgroundImage}
        />
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