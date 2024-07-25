import ReactDOM from "react-dom/client";
import { Application } from "./components/application.jsx";

const rootElement = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(<Application />);
