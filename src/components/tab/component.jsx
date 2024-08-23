import styles from "./styles.module.css"

export const Tab = ({ name, clickHandler, disabled }) => {
    return (
        <button disabled={disabled} 
                className={styles.tabButton} 
                onClick={clickHandler}>
            {name}
        </button>
    );
};
