import styles from "./Slide.module.css"
import { Object } from "../slideObject/SlideObject"
import { Presentation } from "../../types/PresentationType"
import { Slide, SlideProps } from "../../types/SlideType"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"

function SlideArea(prop: SlideProps) {
    //TODO далее работаем над объектом prop.presentation.slide.selectedSlide;
    // var elementList = prop.presentation.slides.map(slide => slide.id == prop.presentation.selectedSlideUniqueIds[0]){
    //     return (
    //         <div>{obj.zIndex}</div>
    //     )
    // });

    const presentation: Presentation = useTypedSelector(state => state);
    const slide = presentation.slides.filter(slide => slide.id === prop.slideId)[0];
    const slideObjects = slide.objects.map(
        (object, index) => <Object key={object.id} objectId={object.id} objectIndex={index}/>
    )

    return (
        <svg className={styles.svg} viewBox="0 0 1536px 735px">
            {slideObjects}
        </svg>
    )
}

export {
    SlideArea
}