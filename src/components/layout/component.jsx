import { Footer } from "../footer/component.jsx";
import { Header } from "../header/component.jsx";

export const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    );
};
