import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,
  document.getElementById("root")
);
