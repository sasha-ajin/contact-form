import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000'

if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); // Updated usage
    root.render(<App/>);
}
