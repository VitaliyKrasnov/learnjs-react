import styles from "./styles.module.css"
import classnames from "classnames"

export const Counter = ({ value, increment, decrement, containerClass, viewVariant}) => {
    return (
      <div className={classnames(styles.counterContainer, containerClass)}>
        <button className={classnames(
          {
            [styles.reviewCounter]: viewVariant === "reviewForm",
            [styles.reviewCounterLeftContent]: viewVariant === "reviewForm",
            [styles.dishCounter]: viewVariant === "dish",
            [styles.dishCounterLeftContent]: viewVariant === "dish",
          }
          )} onClick={decrement}></button>
        <span readOnly className={classnames({
            [styles.countReview]: viewVariant === "reviewForm",
            [styles.countDish]: viewVariant === "dish",
        })}>{value}</span>
        <button className={classnames(
          {
            [styles.reviewCounter]: viewVariant === "reviewForm",
            [styles.reviewCounterRightContent]: viewVariant === "reviewForm",
            [styles.dishCounter]: viewVariant === "dish",
            [styles.dishCounterRightContent]: viewVariant === "dish",
          }
          )} onClick={increment}></button>
      </div>
    );
  };
  