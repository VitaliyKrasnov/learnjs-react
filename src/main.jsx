import ReactDOM from "react-dom/client";
import { restaurants } from "./mock.js";

const rootElement = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(
    restaurants.map((restaurant) => (
        <div>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            {restaurant.menu.map((dish) => (
                <ul>
                    <li>
                        <h4>
                            {dish.name} - ${dish.price}
                        </h4>
                        <h5>Ingredients</h5>
                        {dish.ingredients.map((ingridient) => (
                            <ul>
                                <li>{ingridient}</li>
                            </ul>
                        ))}
                    </li>
                </ul>
            ))}
            <h3>Reviews</h3>
            {restaurant.reviews.map((review) => (
                <ul>
                    <li>
                        {review.user} ({review.rating}): {review.text}
                    </li>
                </ul>
            ))}
        </div>
    ))
);
