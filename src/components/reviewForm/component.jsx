import { Counter } from "../counter/component.jsx";
import { useForm } from "./hook.js";

import styles from "./styles.module.css"

export const ReviewForm = () => {
    const {form, setName, setReview, incRating, decRating, clearForm} = useForm();
    const {name, review, rating} = form;

    return (
        <div>
            <div className={styles.nameContainer}>
                <div><span>Ваше имя:</span></div>
                <input type="text" value={name} 
                        onChange={(event) => {
                            setName(event.target.value);
                        }} />
            </div>

            <div className={styles.textContainer}>
                <div><span>Отзыв:</span></div>
                <textarea cols={50} rows={3} value={review}
                            placeholder="Напишите здесь ваш отзыв о ресторане"
                            onChange={(event) => {
                                setReview(event.target.value);
                            }}></textarea>
            </div>

            <div className={styles.counterContainer}>
                <span className={styles.ratingText}>Рейтинг:</span>
                <Counter value={rating} 
                         increment={() => {incRating(rating)}} 
                         decrement={() => {decRating(rating)}}
                         viewVariant={"reviewForm"}
                         containerClass={styles.counterComponentContainer} />
            </div>

            <div>
                <button onClick={() => {
                           clearForm();
                        }}>Сохранить</button>
            </div>
        </div>
    );
};
