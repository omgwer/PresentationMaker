import { useEffect, useRef, useState } from "react";
import { ChangePresentationName } from "../../functions/presentationFuncs";
import { AppProps } from "../../types/AppProps"
import { EditContextMenu } from "./EditContextMenu/EditContextMenu";
import { FileContextMenu } from "./FileContextMenu/FileContextMenu";
import { InsertContextMenu } from "./InsertContextMenu/InsertContextMenu"
import styles from "./Header.module.css"
import { FormatContextMenu } from "./FormatContextMenu/FormatContextMenu";
import { useSlideActions } from "../../state/hooks/UseSlidesActions";
import { usePresentationActions } from "../../state/hooks/UsePresentationActions";
import { Presentation } from "../../types/Presentation";
import {useTypedSelector} from "../../state/hooks/UseTypedSelector";

// function UpdatePresentationName() {
//     setPresentationNameIsEditable(false);
//     //TODO ref!!
//     var inputElement = document.getElementById('presentationName') as HTMLInputElement;
//     var newPresentationName = inputElement.value;
//     dispatch(ChangePresentationName, newPresentationName);   
// }

const Header: React.FC = () => {
    const fileDropdownRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    // var isEdit: Boolean = getPresentationNameIsEditable();

    const {getPresentation} = usePresentationActions();
    const presentation = useTypedSelector(state => state.presentation);

    var presentationNameForm = <div className={styles.projectName}>
                                 {presentation?.name}
    </div> 
    // var presentationNameForm = isEdit === false ? <div className={styles.projectName} 
    //                             onDoubleClick={() => {
    //                                 setPresentationNameIsEditable(true);
    //                                 render()
    //                             }}>
    //                             {presentationName}
    //                         </div> 
    //                         : 
    //                         <form>
    //                             <input type="text" id="presentationName" name="fname" defaultValue={presentationName} onDoubleClick={() => {
    //                                     UpdatePresentationName();
    //                                 }} onKeyPress={() => {
    //                                     //TODO Сделать обработку нажатия Enter
    //                                 }}/>
    //                         </form>;
    return (
        <div className={styles.header}>            
            <div className={styles.icon}></div>
            <div className={styles.block}>
                
                {presentationNameForm}
                
                <div className={styles.navigationMenu}>
                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                // onClick={() => {
                                //     fileDropdownRef.current?.classList.toggle( styles.show );
                                // }}
                                >
                            Файл
                        </button>
                        <div ref={fileDropdownRef}
                             className={styles.dropdownContent}>
                            <FileContextMenu />
                        </div>
                    </div>
                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    var elem = document.getElementById("EditDropdown") as HTMLDivElement;
                                    elem.classList.toggle( styles.show );
                                }}>
                            Правка
                        </button>
                        <div id="EditDropdown"
                             className={styles.dropdownContent}>
                            <EditContextMenu />
                        </div>
                    </div>
                    <div className={styles.dropDown}>
                        <button className={styles.button}
                                onClick={() => {
                                    var elem = document.getElementById("InsertDropdown") as HTMLDivElement;
                                    elem.classList.toggle( styles.show );
                                }}>
                            Вставка
                        </button>
                        <div id="InsertDropdown"
                             className={styles.dropdownContent}>
                            <InsertContextMenu />
                        </div>
                    </div>
                    <div className={styles.dropDown}>
                        <button className={styles.button}
                            onClick={() => {
                                var elem = document.getElementById("FormatDropdown") as HTMLDivElement;
                                elem.classList.toggle( styles.show );
                            }}>
                            Формат
                        </button>
                        <div id="FormatDropdown"
                             className={styles.dropdownContent}>
                            <FormatContextMenu />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export {
    Header
}