import { Counter } from "../counter/component.jsx";
import { useForm } from "./hook.js";

export const ReviewForm = () => {
    const {form, setName, setReview, incRating, decRating, clearForm} = useForm();
    const {name, review, rating} = form;

    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <div><span>Ваше имя:</span></div>
                <input type="text" value={name} 
                        onChange={(event) => {
                            setName(event.target.value);
                        }} />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <div><span>Отзыв:</span></div>
                <textarea cols={50} rows={3} value={review}
                            placeholder="Напишите здесь ваш отзыв о ресторане"
                            onChange={(event) => {
                                setReview(event.target.value);
                            }}></textarea>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <span>Рейтинг:</span>
                <Counter value={rating} 
                         increment={() => {incRating(rating)}} 
                         decrement={() => {decRating(rating)}} />
            </div>

            <div>
                <button onClick={() => {
                           clearForm();
                        }}>Сохранить</button>
            </div>
        </div>
    );
};
