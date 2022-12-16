import styles from "./PreviewPanelSlide.module.css"

function PreviewPanelSlide() {
    return(
        <div className={styles.previewpannel__previewBlock}>
            <div className={styles.previewBlock__text}>2</div>
            <div className={styles.previewBlock__slide}></div>
        </div>
    )
}

export {
    PreviewPanelSlide
}