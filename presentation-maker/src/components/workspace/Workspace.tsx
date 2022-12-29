import { AppProps } from "../../types/appProps"
import { PreviewPanel } from "../previewPanel/PreviewPanel"
import { Slide } from '../slide/Slide'
import styles from './Workspace.module.css'

function Workspace(prop: AppProps) {
    return (
        <div className={styles.workspace}>
            <PreviewPanel presentation={prop.presentation}/>
            <Slide presentation={prop.presentation}/>
        </div>
    )   
}

export {
    Workspace
}