import styles from "./Palette.module.css";
import {useTypedSelector} from "../../../../state/hooks/UseTypedSelector";


function Palette() {

    const presentation = useTypedSelector(state => state);
    return (
        <div>
            <div className={styles.paletteWrapper}>
                12313
            </div>
        </div>
    )
}


export {
    Palette
}