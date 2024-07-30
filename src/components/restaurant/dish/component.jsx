import { CounterContainer } from "../../counter/container.jsx";

export const Dish = ({ dish }) => {

    return (
        <li style={{paddingBottom: '20px'}}>
            <span style={{ fontWeight: "bold" }}>
                {dish.name} - ${dish.price}
            </span>
            <CounterContainer min={0} max={9} step={1} />
            <div style={{paddingTop: '10px'}}>
                <span>Ingredients:</span>&nbsp;<span>{dish.ingredients.join(", ")}</span>
            </div>
        </li>
    );
};
