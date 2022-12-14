import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.header}>            
            <div className={styles.icon}></div>
            <div className={styles.block}>
                <div className={styles.projectName}>
                    Презентация без названия
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