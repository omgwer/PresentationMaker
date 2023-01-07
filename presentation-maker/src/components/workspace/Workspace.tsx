import styles from "./Workspace.module.css"
import { SlideArea } from "../slide/Slide"
import { Presentation } from "../../types/PresentationType"
import { PreviewPanel } from "../previewPanel/PreviewPanel"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"

function Workspace() {

    const presentation: Presentation = useTypedSelector(state => state);
    let workspaceSlideArea;

    if (presentation.selectedSlideId) {
        const slideIndex = presentation.slides.map(slide => slide.id).indexOf(presentation.selectedSlideId);
        workspaceSlideArea = <div className={styles.slide}>
                                <SlideArea key={presentation.selectedSlideId}
                                           slideId={presentation.selectedSlideId}
                                           slideOrderId={slideIndex}
                                           viewPort="0 0 1536 735"/>
                             </div>
    } else {
        workspaceSlideArea = <div></div>
    }
    
    return (
        <div className={styles.workspace}>
            <PreviewPanel/>
            <div className={styles.slideWrapper}>
            {workspaceSlideArea}
            </div>
        </div>
    )
}

export {
    Workspace
}