import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/desktop.css";
import "./css/animations.css";
import App from "./pages/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
