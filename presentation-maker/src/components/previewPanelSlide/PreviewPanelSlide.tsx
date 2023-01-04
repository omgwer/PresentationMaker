import {AppProps} from "../../types/AppProps"
import styles from "./PreviewPanelSlide.module.css"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";

function PreviewPanelSlide(prop: AppProps) {
    //1
    const presentation = useTypedSelector(state => state);

    const {setSlideSelected} = usePresentationActions();

    let slideId: string = String(prop.slide);
    let classNames = styles.slide;

    if (presentation.selectedSlideId != undefined && slideId == presentation.selectedSlideId) {
        classNames += ' ' + styles.selected;
    }

    return (
        <div className={styles.previewBlock} onClick={() => {
            setSlideSelected(prop.slide)
        }}>
            <div className={styles.text}></div>
            <div className={classNames}></div>
        </div>
    )
}

export {
    PreviewPanelSlide
}