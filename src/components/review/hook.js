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

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
    
    const setName = (name) => {dispatch({ type: "setName", payload: name})};
    const setReview = (review) => {dispatch({ type: "setReview", payload:review})};
    const incRating = (rating) => {dispatch({type: "setRating", payload: Math.min(rating + STEP_RATING, MAX_RATING)})};
    const decRating = (rating) => {dispatch({type: "setRating", payload: Math.max(rating - STEP_RATING, MIN_RATING)})};
    const clearForm = () => {dispatch({ type: "clearForm"})};

    return {
        form,
        setName,
        setReview,
        incRating,
        decRating,
        clearForm
    }
};