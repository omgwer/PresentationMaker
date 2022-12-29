import { AppProps } from "../../types/appProps"
import styles from "./Header.module.css"

function Header(props: AppProps) {
    return (
        <div className={styles.header}>            
            <div className={styles.icon}></div>
            <div className={styles.block}>
                <div className={styles.projectName}>
                    {props.presentation.name}
                </div>
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