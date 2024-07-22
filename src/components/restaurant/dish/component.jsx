import { useState } from "react";
import { Counter } from "../../counter/component.jsx";

export const Dish = ({ dish }) => {
    const [dishAmount, setDishAmount] = useState(0);
    const incDishAmount = () => setDishAmount((dishAmount + 1) <= 5 ? (dishAmount + 1) : 5);
    const decDishAmount = () => setDishAmount((dishAmount - 1) >= 0 ? (dishAmount - 1) : 0);

    return (
        <li style={{paddingBottom: '20px'}}>
            <span style={{ fontWeight: "bold" }}>
                {dish.name} - ${dish.price}
            </span>
            <Counter dishAmount={dishAmount} incDishAmount={incDishAmount} decDishAmount={decDishAmount} />
            <div style={{paddingTop: '10px'}}>
                <span>Ingredients:</span>&nbsp;<span>{dish.ingredients.join(", ")}</span>
            </div>
        </li>
    );
};
