import styles from "./workspace.module.css"
import {Slide} from '../slide/slide'

function Workspace() {
    return(
        <div className={styles.workspace}>
            <Slide />
        </div>
    )
}

export {
    Workspace
}