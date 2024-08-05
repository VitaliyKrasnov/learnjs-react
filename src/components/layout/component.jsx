import { Footer } from "../footer/component.jsx";
import { Header } from "../header/component.jsx";
import { ScrollProgressBar } from "../scrollProgressBar/component.jsx";

export const Layout = ({ children }) => {

    return (
        <div>
            <ScrollProgressBar />
            <Header />
            { children }
            <Footer />
        </div>
    );
};
