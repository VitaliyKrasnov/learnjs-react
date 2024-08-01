import { Counter } from "../counter/component.jsx";
import { useReducer } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;
const STEP_RATING = 1;
const INITIAL_FORM = {
    name: "",
    review: "",
    rating: 1
}

function reducer(state, { type, payload }) {
    switch(type) {
        case 'setName':
            return {
                ...state,
                name: payload
            };
        case 'setReview':
            return {
                ...state,
                review: payload
            };
        case 'setRating':
            return {
                ...state,
                rating: payload
            };    
        case 'clearForm':
            return {
                ...INITIAL_FORM
            };  
        default:
            return state;   
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
    const {name, review, rating} = form;

    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <div><span>Ваше имя:</span></div>
                <input type="text" value={name} 
                        onChange={(event) => {
                            dispatch({ type: "setName", payload: event.target.value});
                        }} />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <div><span>Отзыв:</span></div>
                <textarea cols={50} rows={3} value={review}
                            placeholder="Напишите здесь ваш отзыв о ресторане"
                            onChange={(event) => {
                                dispatch({ type: "setReview", payload: event.target.value});
                            }}></textarea>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <span>Рейтинг:</span>
                <Counter value={rating} 
                         increment={() => {dispatch({type: "setRating", payload: Math.min(rating + STEP_RATING, MAX_RATING)})}} 
                         decrement={() => {dispatch({type: "setRating", payload: Math.max(rating - STEP_RATING, MIN_RATING)})}} />
            </div>

            <div>
                <button onClick={() => {
                            dispatch({ type: "clearForm"});
                        }}>Сохранить</button>
            </div>
        </div>
    );
};
