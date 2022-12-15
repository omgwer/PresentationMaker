import { Preview } from "../preview/preview"
import { Workspace } from "../workspace/workspace"
import styles from './Workspacewrapper.module.css'
function WorkspaceWrapper() {
    return (
       <div className={styles.wrapper}>
            <Preview />
            <Workspace />
       </div>
    )   

}


export {WorkspaceWrapper}

