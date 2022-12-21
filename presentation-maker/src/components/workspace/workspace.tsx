import { PreviewPanel } from "../previewPanel/PreviewPanel"
import { Slide } from '../slide/Slide'
import styles from './Workspace.module.css'

function Workspace() {
    return (
        <div className={styles.workspace}>
            <PreviewPanel />
            <Slide />
        </div>
    )   
}

export {
    Workspace
}