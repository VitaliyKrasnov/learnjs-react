import { useState } from "react";
import { Tab } from "../tab/component.jsx";
import { Footer } from "../footer/component.jsx";
import { Header } from "../header/component.jsx";
import { Restaurant } from "../restaurant/component.jsx";

export const Layout = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState({ name: restaurants[0].name });
    const setActiveRestaurantName = (name) => setActiveRestaurant({ name: name });

    return (
        <div>
            <Header />
            {restaurants.map(({ name }) => {
                return (
                    <Tab
                        name={name}
                        clickHandler={() => {
                            setActiveRestaurantName(name);
                        }}
                    />
                );
            })}
            {restaurants.map((restaurant) => {
                return <Restaurant activeRestaurant={activeRestaurant} 
                                    restaurant={restaurant} />;
            })}
            <Footer />
        </div>
    );
};
