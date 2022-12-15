import { SlidePreview } from "../slide-preview/slide-preview"
import styles from "./preview.module.css"

function Preview() {
    return(
        <div className={styles.preview}>
            <SlidePreview/>
            <SlidePreview/>
        </div>
    )
}

export {
    Preview
}