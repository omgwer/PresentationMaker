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
        workspaceSlideArea = <SlideArea key={presentation.selectedSlideId}
                                        slideId={presentation.selectedSlideId}
                                        slideOrderId={slideIndex}/>
    } else {
        workspaceSlideArea = <div></div>
    }
    
    return (
        <div className={styles.workspace}>
            <PreviewPanel/>
            <div className={styles.slideWrapper}>
                <div className={styles.slide}>
                    {workspaceSlideArea}
                </div>
            </div>
        </div>
    )
}

export {
    Workspace
}