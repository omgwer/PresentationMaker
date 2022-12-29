import { useState } from "react";
import { ChangePresentationName } from "../../functions/presentationFuncs";
import { dispatch, getPresentationNameIsEditable, render, setPresentationNameIsEditable } from "../../state";
import { AppProps } from "../../types/appProps"
import styles from "./Header.module.css"

function UpdatePresentationName() {
    setPresentationNameIsEditable(false);
    var inputElement = document.getElementById('presentationName') as HTMLInputElement;
    var newPresentationName = inputElement.value;
    dispatch(ChangePresentationName, newPresentationName);   
}

function Header(props: AppProps) {
    const [state, setState] = useState('');
    var isEdit: Boolean = getPresentationNameIsEditable();
    var presentationName:string = props.presentation.name;
    var presentationNameForm = isEdit === false ? <div className={styles.projectName} 
                                onDoubleClick={() => {
                                    setPresentationNameIsEditable(true);
                                    render()
                                }}>
                                {presentationName}
                            </div> 
                            : 
                            <form>
                                <input type="text" id="presentationName" name="fname" defaultValue={presentationName} onDoubleClick={() => {
                                        UpdatePresentationName();
                                    }} onKeyPress={() => {
                                        //TODO Сделать обработку нажатия Enter
                                    }}/>
                            </form>;
    return (
        <div className={styles.header}>            
            <div className={styles.icon}></div>
            <div className={styles.block}>
                
                {presentationNameForm}
                
                <div className={styles.navigationMenu}>
                    <button className={styles.button}>
                        Файл
                    </button>
                    <button className={styles.button}>
                        Правка
                    </button>
                    <button className={styles.button}>
                        Вставка
                    </button>
                    <button className={styles.button}>
                        Формат
                    </button>
                </div>
            </div>            
        </div>
    )
}

export {
    Header
}