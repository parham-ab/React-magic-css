import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// react router dom
import { BrowserRouter } from "react-router-dom";
// styles
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
