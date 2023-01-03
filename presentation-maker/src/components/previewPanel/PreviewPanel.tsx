import { AppProps } from "../../types/AppProps"
import { PreviewPanelSlide } from "../previewPanelSlide/PreviewPanelSlide"
import styles from "./PreviewPanel.module.css"
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";
import {Presentation} from "../../types/Presentation";
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";

const PreviewPanel: React.FC = () => {
    //1
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