import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";
import styles from "./FileContextMenu.module.css";
import {Presentation} from "../../../types/PresentationType";
import {addPresentation} from "../../../state/action-creators/PresentationActionCreator";
import {usePresentationActions} from "../../../state/hooks/UsePresentationActions";

function buildPresentationSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'application/json');
    return fileSelector;
}

function FileContextMenu() {
    const presentation = useTypedSelector(state => state);

    const { addPresentation } = usePresentationActions();

    function savePresentationToJson() {
        let presentationJson = JSON.stringify(presentation);
        let blob = new Blob([presentationJson], {type: "text/plain"});
        let link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", presentation.name + ".json");
        link.click();
    }

    let fileSelector = buildPresentationSelector();
    fileSelector.onchange = (e) => {
        e.preventDefault();
        // @ts-ignore
        let file = fileSelector.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            // @ts-ignore
            let newPresentation :  Presentation = JSON.parse(reader.result as string);
            addPresentation(newPresentation);
        }
        reader.readAsText(file);
    }

    return (
        <>
            <ul className={styles.menuWrapper}>
                <li className={styles.menuList}>
                    <div className={styles.newPresentationIcon}></div>
                    <button className={styles.menuButton }>
                        Создать
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.openPresentationIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                fileSelector.click();
                            }}
                    >
                        Открыть
                    </button>
                </li>
                <li className={styles.menuList}>
                    <div className={styles.savePresentationIcon}></div>
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