import styles from "./Slide.module.css"
import { Slide, SlideProps } from "../../types/SlideType"
import { Presentation } from "../../types/PresentationType"
import { useTypedSelector } from "../../state/hooks/UseTypedSelector"

function SlideArea(prop: SlideProps) {
    //TODO далее работаем над объектом prop.presentation.slide.selectedSlide;
    // var elementList = prop.presentation.slides.map(slide => slide.id == prop.presentation.selectedSlideUniqueIds[0]){
    //     return (
    //         <div>{obj.zIndex}</div>
    //     )
    // });

    const presentation: Presentation = useTypedSelector(state => state);
    let selectedSlideId: string = '';
    if (presentation.selectedSlideId !== undefined) {
        selectedSlideId = presentation.selectedSlideId;
    }

    let slide: Slide = presentation.slides[0];
    if (selectedSlideId != '') {
        slide = presentation.slides.filter(slide => slide.id === selectedSlideId)[0];
    }

    return (
        <div className={styles.slideWrapper}>
            <div className={styles.slide}>
                <svg>
                    {/* {
                        slide.objects.map((obj) =>
                            <Component key={obj.id}
                                       name={obj.type}/>)
                    } */}
                </svg>
            </div>
        </div>
    )
}

export {
    SlideArea
}