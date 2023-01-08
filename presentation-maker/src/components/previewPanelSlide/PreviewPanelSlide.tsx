import styles from "./PreviewPanelSlide.module.css"
import { SlideProps } from "../../types/SlideType"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"
import { usePresentationActions } from "../../state/hooks/UsePresentationActions"
import { SlideArea } from "../slide/Slide";

function PreviewPanelSlide(prop: SlideProps) {

    const presentation = useTypedSelector(state => state);
    const {setSlideSelected} = usePresentationActions();

    let slideId: string = String(prop.slideId);
    let classNames = styles.slide;

    if (presentation.selectedSlideId !== undefined && slideId === presentation.selectedSlideId) {
        classNames += ' ' + styles.selected;
    }

    return (
        <div className={styles.previewBlock} onClick={() => { setSlideSelected(prop.slideId) }}>
            <div className={styles.text}>{prop.slideIndex + 1}</div>
            <div className={classNames}>
                <SlideArea slideId={prop.slideId}
                           slideIndex={prop.slideIndex} 
                           viewPort={prop.viewPort}/>
            </div>
        </div>
    )
}

export {
    PreviewPanelSlide
}