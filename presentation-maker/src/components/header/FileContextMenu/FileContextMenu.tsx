import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";
import styles from "./FileContextMenu.module.css";

function FileContextMenu() {
    const presentation = useTypedSelector(state => state);

    function savePresentationToJson() {
        let presentationJson = JSON.stringify(presentation);
        let blob = new Blob([presentationJson], {type: "text/plain"});
        let link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", presentation.name + ".json");
        link.click();
    }

    return (
        <>
            <ul className={styles.menuWrapper}>
                <li className={styles.menuList}>
                    <button className={styles.menuButton}>
                        Новая презентация
                    </button>
                </li>
                <li className={styles.menuList}>
                    <button className={styles.menuButton}>
                        Открыть
                    </button>
                </li>
                <li className={styles.menuList}>
                    <button className={styles.menuButton}
                    onClick={() => {
                        savePresentationToJson();
                    }}>
                        Сохранить
                    </button>
                </li>
            </ul>
        </>
    )
}

export {
    FileContextMenu
}