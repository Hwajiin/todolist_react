import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import ToDosProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ToDosProvider>
      <App />
    </ToDosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
