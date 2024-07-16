import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1>Reastaurant page</h1>
        {restaurants.map(({ name, menu, reviews }) => {
            return (
                <div>
                    <h2>{name}</h2>
                    <h3>Menu</h3>
                    <ul>
                        {menu.map((dish) => {
                            return (
                                <li>
                                    <h4>
                                        {dish.name} - ${dish.price}
                                    </h4>
                                    <h5>Ingredients</h5>
                                    <ul>
                                        {dish.ingredients.map((ingridient) => (
                                            <li>{ingridient}</li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                    <h3>Reviews</h3>
                    <ul>
                        {reviews.map((review) => {
                            return (
                                <li>
                                    {review.user} ({review.rating}): {review.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        })}
    </div>
);
