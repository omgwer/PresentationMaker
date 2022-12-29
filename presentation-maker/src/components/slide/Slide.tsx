import { AppProps } from "../../types/appProps"
import styles from "./Slide.module.css"

function Slide(prop: AppProps) {
    //TODO далее работаем над объектом prop.presentation.selectedSlide;
    var elementList = prop.presentation.selectedSlide?.objects.map(obj => {
        return (
            <div>{obj.zIndex}</div>
        )
    });
    
    return(
        <div className={styles.slideWrapper}>
            <div className={styles.slide}
                 onClick={() => {
                    
                 }}>
                {elementList}
            </div>
        </div>
    )
}

export {
    Slide
}