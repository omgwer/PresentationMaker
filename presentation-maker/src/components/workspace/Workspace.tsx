import {PreviewPanel} from "../previewPanel/PreviewPanel"
import {SlideForm} from '../slide/Slide'
import styles from './Workspace.module.css'

function Workspace() {
    return (
        <div className={styles.workspace}>
            <PreviewPanel/>
            <SlideForm/>
        </div>
    )
}

export {
    Workspace
}