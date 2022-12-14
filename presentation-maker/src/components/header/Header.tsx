import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.icon}></img>
            <div className={styles.block}>
                <div className={styles.projectName}>
                    Презентация без названия
                </div>
                <div className={styles.navigationMenu}>
                    <button className="header__file-menu">
                        Файл
                    </button>
                    <button className="header__edit-menu">
                        Правка
                    </button>
                    <button className="header__insert-menu">
                        Вставка
                    </button>
                    <button className="header__edit-menu">
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