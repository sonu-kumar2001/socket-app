import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/stylesheets/main.scss"
import { ConProvider } from "./components/ContextApi/index";

ReactDOM.render(
  <React.StrictMode>
    <ConProvider>
      <App />
    </ConProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
