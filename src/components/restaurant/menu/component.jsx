import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
    // увеличиваем массив блюд для получения скролла и использования хука "useEffect"
    menu = [...menu, ...menu, ...menu, ...menu, ...menu, ...menu, ...menu, ...menu, ...menu];

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <Dish dish={dish} />
                ))
                }
            </ul>
        </div>
    );
};
