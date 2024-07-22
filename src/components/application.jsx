import { restaurants } from "../constants/mock.js";
import { Layout } from "./layout/component.jsx";

export const Application = () => {
    return (
        <div>
            <Layout restaurants={ restaurants } />
        </div>
    );
};
