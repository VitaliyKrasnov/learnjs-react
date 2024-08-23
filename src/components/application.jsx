import { useState } from "react";
import { restaurants } from "../constants/mock.js";
import { Layout } from "./layout/component.jsx";
import { TabsSection } from "./tabsSection/component.jsx";
import { Restaurant } from "./restaurant/component.jsx";

import "./reset.css"

export const Application = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);
    const activeRestaurantObj = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

    return (
        <div>
            <Layout>
                <TabsSection
                    restaurants={restaurants}
                    activeRestaurantId={activeRestaurantId}
                    onClickHandler={(id) => setActiveRestaurantId(id)}
                />
                <Restaurant restaurant={activeRestaurantObj} />
            </Layout>
        </div>
    );
};
