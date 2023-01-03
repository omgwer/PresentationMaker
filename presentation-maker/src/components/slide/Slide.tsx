import { AppProps } from "../../types/AppProps"
import styles from "./Slide.module.css"
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";

function Slide() {
    //TODO далее работаем над объектом prop.presentation.slide.selectedSlide;
    // var elementList = prop.presentation.slides.map(slide => slide.id == prop.presentation.selectedSlideUniqueIds[0]){
    //     return (
    //         <div>{obj.zIndex}</div>
    //     )
    // });

    
    return(
        <div className={styles.slideWrapper}>
            <div className={styles.slide}
                 onClick={() => {
                 }}>
            </div>
        </div>
    )
}

export {
    Slide
}