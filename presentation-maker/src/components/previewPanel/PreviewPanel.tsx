import {PreviewPanelSlide} from "../previewPanelSlide/PreviewPanelSlide"
import styles from "./PreviewPanel.module.css"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";

const PreviewPanel: React.FC = () => {
    //1
    const presentation = useTypedSelector(state => state);

    const listSlides = presentation?.slides.map((currentSlide) =>
        <PreviewPanelSlide key={currentSlide.id} slide={currentSlide.id}/>
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