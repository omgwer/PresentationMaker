import { PreviewPanel } from "../PreviewPanel/PreviewPanel"
import { Slide } from '../Slide/Slide'
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