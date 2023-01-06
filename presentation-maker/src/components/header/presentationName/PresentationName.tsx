import React from "react";
import styles from "./PresentationName.module.css";

// Create an ElementMaker component
function PresentationName(props: any) {
  return (
    <span>
        {
            props.showInputElement ? (
                <input
                    className={styles.changeNameInput}
                    type="text"
                    value={props.value}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    autoFocus
                />
            ) : (
                <span
                    onDoubleClick={props.handleDoubleClick}
                    className={styles.projectName}
                >
                {props.value}
            </span>
            )
        }
    </span>
  );
}

export {
    PresentationName
}