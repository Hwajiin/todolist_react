import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import ToDosProvider from "./context";
import GlobalStyles from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ToDosProvider>
      <App />
      <GlobalStyles />
    </ToDosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
