import styles from "./PreviewPanelSlide.module.css"



function PreviewPanelSlide() {
    return(
        <div className={styles.previewBlock}>
            <div className={styles.text}>2</div>
            <div className={styles.slide}></div>
        </div>
    )
}

export {
    PreviewPanelSlide
}