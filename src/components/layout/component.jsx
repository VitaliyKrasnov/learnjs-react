import { useState } from "react";
import { Tab } from "../tab/component.jsx";
import { Footer } from "../footer/component.jsx";
import { Header } from "../header/component.jsx";
import { Restaurant } from "../restaurant/component.jsx";

export const Layout = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState({ id: restaurants[0].id });
    const setActiveRestaurantId = (id) => setActiveRestaurant({ id: id });
    let activeRestaurantObj = restaurants.find((restaurant) => restaurant.id === activeRestaurant.id);

    return (
        <div>
            <Header />
            {restaurants.map(({ name, id }) => {
                return (
                    <Tab name={name} clickHandler={() => setActiveRestaurantId(id)} />
                );
            })}
            <Restaurant restaurant={activeRestaurantObj} />
            <Footer />
        </div>
    );
};
