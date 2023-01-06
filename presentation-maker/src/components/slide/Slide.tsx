import styles from "./Slide.module.css"
import {Presentation} from "../../types/PresentationType"
import {SlideProps} from "../../types/SlideType"
import {useTypedSelector} from "../../state/hooks/UseTypedSelector"
import {GetTagFromObject} from "../../functions/SlideObjectGenerator";

function SlideArea(prop: SlideProps) {
    const presentation: Presentation = useTypedSelector(state => state);
    const slide = presentation.slides.filter(slide => slide.id === prop.slideId)[0];
    const slideObjects = slide.objects.map(
        (object) => GetTagFromObject(slide.id, object)
    )

    return (
        <svg className={styles.svg}>
            {slideObjects}
        </svg>
    )
}

export {
    SlideArea
}