import { useEffect, useRef, useState } from "react";
import { ChangePresentationName } from "../../functions/presentationFuncs";
import { AppProps } from "../../types/appProps"
import { EditContextMenu } from "./EditContextMenu/EditContextMenu";
import { FileContextMenu } from "./FileContextMenu/FileContextMenu";
import { InsertContextMenu } from "./InsertContextMenu/InsertContextMenu"
import styles from "./Header.module.css"
import { FormatContextMenu } from "./FormatContextMenu/FormatContextMenu";
import { useSlideActions } from "../../state/hooks/useSlidesActions";
import { usePresentationActions } from "../../state/hooks/usePresentationActions";

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

    const {getPresentationName} = usePresentationActions();

    var presentationName:string = getPresentationName();
    var presentationNameForm = <div className={styles.projectName}>
                                 {presentationName}
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
                            <FileContextMenu presentation={props.presentation}/>
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
                            <EditContextMenu presentation={props.presentation}/>
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
                            <InsertContextMenu presentation={props.presentation}/>
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
                            <FormatContextMenu presentation={props.presentation}/>
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