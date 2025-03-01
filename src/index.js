import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Below lines are required for toast and for every taost showing we have to make taost container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // css configuration of toast container

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <ToastContainer />
  </div>
);
