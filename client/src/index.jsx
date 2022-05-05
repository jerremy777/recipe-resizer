import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./styles.css";


const mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<App name="Jane" />);