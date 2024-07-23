import { useState } from "react";
import { TabsSection } from "../tabsSection/component.jsx";
import { Footer } from "../footer/component.jsx";
import { Header } from "../header/component.jsx";
import { Restaurant } from "../restaurant/component.jsx";

export const Layout = ({ restaurants }) => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id );
    const activeRestaurantObj = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

    return (
        <div>
            <Header />
            <TabsSection restaurants={restaurants} 
                         activeRestaurantId={activeRestaurantId} 
                         onClickHandler={(id) => setActiveRestaurantId(id)} />
            <Restaurant restaurant={activeRestaurantObj} />
            <Footer />
        </div>
    );
};
