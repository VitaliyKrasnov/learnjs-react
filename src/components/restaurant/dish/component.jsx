import { CounterContainer } from "../../counter/container.jsx";

import styles from "./styles.module.css"

export const Dish = ({ dish }) => {

    return (
        <li className={styles.dishBlock}>
            <div className={styles.dishAndCounterContainer}>
                <span className={styles.name}>{dish.name}:</span><span className={styles.price}>${dish.price}</span>
                <CounterContainer min={0} max={9} step={1} 
                                  containerClass={styles.counterComponentContainer} viewVariant={"dish"}
                />
            </div>
            <div className={styles.ingridientsBlock}>
                <span>Ingredients:</span><span className={styles.ingredients}>{dish.ingredients.join(", ")}</span>
            </div>
        </li>
    );
};
