import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";
import styles from "./FileContextMenu.module.css";
import {Presentation} from "../../../types/PresentationType";
import {addPresentation} from "../../../state/action-creators/PresentationActionCreator";
import {usePresentationActions} from "../../../state/hooks/UsePresentationActions";
import React, {useRef} from "react";

function buildPresentationSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'application/json');
    return fileSelector;
}

function FileContextMenu() {
    const presentation = useTypedSelector(state => state);
    const importBlockRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const importBlockLinkRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

    const {addPresentation} = usePresentationActions();

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
            let newPresentation: Presentation = JSON.parse(reader.result as string);
            addPresentation(newPresentation);
        }
        reader.readAsText(file);
    }

    function openPresentationInCloud(value: string | undefined) {
        if (value === "" || value === undefined || value === " ")
            return;

        fetch(value)
            .then(resp => resp.json())
            .then(data => addPresentation(data));
    }

    return (
        <>
            <ul className={styles.menuWrapper}>
                <li className={styles.menuList}>
                    <div className={styles.newPresentationIcon}></div>
                    <button className={styles.menuButton}>
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
                <li className={styles.menuList}>
                    <div className={styles.exportToPdfIcon}></div>
                    <button className={styles.menuButton}
                            onClick={() => {
                                //TODO Export to pdf
                            }}>
                        Экспорт в PDF
                    </button>
                </li>
                <li
                    className={styles.menuList}>
                    <div className={styles.menuListWrapper} onClick={() => {
                        importBlockRef.current?.classList.toggle(styles.importHidden);
                    }}
                    >
                        <div className={styles.cloudSync}></div>
                        <button className={styles.menuButton}>
                            Импорт по URL
                        </button>
                        <div className={styles.nextStepIcon}></div>
                    </div>


                    <div
                        ref={importBlockRef}
                        className={styles.importWrapper}>
                        <input ref={importBlockLinkRef} className={styles.importInput}></input>
                        <div
                            onClick={() => {
                                importBlockRef.current?.classList.add(styles.importHidden);
                                openPresentationInCloud(importBlockLinkRef.current?.value);
                            }}
                            className={styles.importButton}>Ok
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}


export {
    FileContextMenu
}