import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); // Updated usage
    root.render(<App/>);
}
