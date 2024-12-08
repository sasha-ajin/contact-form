import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";

if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); // Updated usage
    root.render(<App />);
}
