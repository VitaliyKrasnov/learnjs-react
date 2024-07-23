import { Tab } from "../tab/component.jsx";

export const TabsSection = ({ restaurants, activeRestaurantId, onClickHandler }) => {
    return (
        <div>
            {restaurants.map(({ name, id }) => {
                return (
                    <Tab
                        name={name}
                        disabled={id === activeRestaurantId}
                        clickHandler={() => onClickHandler(id)}
                    />
                );
            })}
        </div>
    );
};
