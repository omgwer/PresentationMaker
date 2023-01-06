import React, { useState } from "react";
import styles from "./Header.module.css";
import { useRef } from "react";
import { EditContextMenu } from "./EditContextMenu/EditContextMenu";
import { FileContextMenu } from "./FileContextMenu/FileContextMenu";
import { useTypedSelector } from "../../state/hooks/UseTypedSelector";
import { InsertContextMenu } from "./InsertContextMenu/InsertContextMenu";
import { FormatContextMenu } from "./FormatContextMenu/FormatContextMenu";
import { PresentationName } from "./presentationName/PresentationName";
import { usePresentationActions } from "../../state/hooks/UsePresentationActions";

const Header: React.FC = () => {
    const fileDropdownRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const { renamePresentation } = usePresentationActions();
    const [fullName, setFullName] = useState("Новая презентация");
    const [showInputEle, setShowInputEle] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.icon}></div>
            <div className={styles.block}>

                <div>
                    <PresentationName
                        value={fullName}
                        handleChange={(e: any) => {setFullName(e.target.value)}}
                        handleDoubleClick={() => setShowInputEle(true)}
                        handleBlur={(e: any) => {
                            setShowInputEle(false);
                            renamePresentation(e.target.value);
                        }}
                        showInputEle={showInputEle}
                    />
                </div>

                <div className={styles.navigationMenu}>
                    
                    <div className={styles.dropDown}>
                        <button className={styles.button}
                            // onClick={() => {
                            //     fileDropdownRef.current?.classList.toggle( styles.show );
                            // }}
                        >Файл</button>
                        <div ref={fileDropdownRef} className={styles.dropdownContent}><FileContextMenu/></div>
                    </div>

                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    let elem = document.getElementById("EditDropdown") as HTMLDivElement;
                                    elem.classList.toggle(styles.show);
                                }}
                        >Правка</button>
                        <div id="EditDropdown" className={styles.dropdownContent}><EditContextMenu/></div>
                    </div>

                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    let elem = document.getElementById("InsertDropdown") as HTMLDivElement;
                                    elem.classList.toggle(styles.show);
                                }}
                        >Вставка</button>
                        <div id="InsertDropdown" className={styles.dropdownContent}><InsertContextMenu/></div>
                    </div>

                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    let elem = document.getElementById("FormatDropdown") as HTMLDivElement;
                                    elem.classList.toggle(styles.show);
                                }}
                        >Формат</button>
                        <div id="FormatDropdown" className={styles.dropdownContent}><FormatContextMenu/></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export {
    Header
}