import styles from "./slide-preview.module.css"

function SlidePreview() {
    return(
        <div className={styles.slidepreview_container}>
            <div className={styles.slidepreview_text}>2</div>
            <div className={styles.slidepreview}></div>
        </div>
    )
}

export {
    SlidePreview
}