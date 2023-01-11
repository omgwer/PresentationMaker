import React, {useRef, useState} from "react";
import styles from "./Header.module.css";
import {EditContextMenu} from "./editContextMenu/EditContextMenu";
import {FileContextMenu} from "./fileContextMenu/FileContextMenu";
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";
import {InsertContextMenu} from "./insertContextMenu/InsertContextMenu";
import {PresentationName} from "./presentationName/PresentationName";
import {usePresentationActions} from "../../state/hooks/UsePresentationActions";

const Header: React.FC = () => {
    const fileDropdownRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const editDropdownRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const insertDropdownRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const {renamePresentation} = usePresentationActions();
    const presentation = useTypedSelector(state => state);
    const [fullName, setFullName] = useState(presentation.name);
    const [showInputElement, setShowInputElement] = useState(false);

    let isOpen: boolean = false;

    //TODO допилить чтобы меню закрывалось если другое окно открылось
    function checkOpenHeaderElements() {

    }

    return (
        <div className={styles.header}>
            <div className={styles.icon}></div>
            <div className={styles.block}>

                <div className={styles.presentationNameWrapper}>
                    <PresentationName
                        value={fullName}
                        handleChange={(e: any) => {
                            setFullName(e.target.value)
                        }}
                        handleDoubleClick={() => setShowInputElement(true)}
                        handleBlur={(e: any) => {
                            setShowInputElement(false);
                            renamePresentation(e.target.value);
                            setFullName(e.target.value)
                        }}
                        showInputElement={showInputElement}
                    />
                </div>

                <div className={styles.navigationMenu}>

                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    isOpen = true;
                                    fileDropdownRef.current?.classList.toggle(styles.show);
                                }}
                                onMouseLeave={() => {
                                    if (!isOpen)
                                        fileDropdownRef.current?.classList.remove(styles.show);
                                }}
                        >Файл
                        </button>
                        <div
                            onMouseLeave={() => {
                                isOpen = false;
                                fileDropdownRef.current?.classList.remove(styles.show);
                            }}
                            ref={fileDropdownRef}
                            className={styles.dropdownContent}>
                            <FileContextMenu/>
                        </div>
                    </div>

                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    isOpen = true;
                                    editDropdownRef.current?.classList.toggle(styles.show);
                                }}
                                onMouseLeave={() => {
                                    if (!isOpen)
                                        editDropdownRef.current?.classList.remove(styles.show);
                                }}
                        >Правка
                        </button>
                        <div onMouseLeave={() => {
                            isOpen = false;
                            editDropdownRef.current?.classList.remove(styles.show);
                        }}
                             className={styles.dropdownContent}
                             ref={editDropdownRef}
                        ><EditContextMenu/></div>
                    </div>

                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    insertDropdownRef.current?.classList.toggle(styles.show);
                                    isOpen = true;
                                }}
                                onMouseLeave={() => {
                                    if (!isOpen) {
                                        insertDropdownRef.current?.classList.remove(styles.show);
                                    }
                                }}
                        >Вставка
                        </button>
                        <div onMouseLeave={() => {
                            isOpen = false;
                            insertDropdownRef.current?.classList.remove(styles.show);
                        }}
                            className={styles.dropdownContent}
                             ref={insertDropdownRef}><InsertContextMenu/></div>
                    </div>

                    <div className={styles.dropDown}>
                        <button className={styles.button + " " + styles.previewWrapper}
                                onClick={() => {
                                    //TODO addPreview func
                                }}
                        >Превью
                            <div className={styles.previewButton}
                            ></div>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export {
    Header
}