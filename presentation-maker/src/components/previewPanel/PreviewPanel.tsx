import { AppProps } from "../../types/appProps"
import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"
import styles from "./PreviewPanel.module.css"
import {usePresentationActions} from "../../state/hooks/usePresentationActions";
import {Presentation} from "../../types/presentation";
import {useTypedSelector} from "../../state/hooks/useTypedSelector";

const PreviewPanel: React.FC = () => {

    const presentation = useTypedSelector(state => state.presentation);

    const listSlides = presentation?.slides.map((currentSlide) =>
                <PreviewPanelSlide key={currentSlide.id} slide={currentSlide.id}/>
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