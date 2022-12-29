import { AppProps } from "../../types/appProps"
import styles from "./Slide.module.css"

function Slide(prop: AppProps) {
    //TODO далее работаем над объектом prop.presentation.selectedSlide;
    return(
        <div className={styles.slideWrapper}>
            <div className={styles.slide}>
                
            </div>
        </div>
    )
}

export {
    Slide
}