import { useState } from "react";
import { Counter } from "./component.jsx";

const useCounter = (min, max, step) => {
    const [value, setValue] = useState(min);
    const increment = () => setValue((prevState) => Math.min(prevState + step, max));
    const decrement = () => setValue((prevState) => Math.max(prevState - step, min));
    
    return {
        value,
        increment,
        decrement
    };
};

export const CounterContainer = ({ min=0, max=9, step=1, containerClass, viewVariant }) => {
    const {value, increment, decrement} = useCounter(min, max, step);
    
    return (
        <Counter value={value} increment={increment} decrement={decrement}
                 containerClass={containerClass} viewVariant={viewVariant} />
    );
};
