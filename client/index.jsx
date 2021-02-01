import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/desktop.css";
import "./css/animations.css";
import App from "./pages/App.jsx";

const path = require("path");
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/service-worker.js")
//       .then((registration) => {
//         console.log("SW registered: ", registration);
//       })
//       .catch((registrationError) => {
//         console.log("SW registration failed: ", registrationError);
//       });
//   });
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // navigator.serviceWorker
    //   .register(path.resolve(__dirname, "../dist", "service-worker.js"), {
    //     scope: "/",
    //   })
    // navigator.serviceWorker
    //   .register("service-worker.js")
    navigator.serviceWorker
      .register(path.resolve("service-worker.js"))
      .then((registration) => {
        console.log(
          "SW registered: ",
          registration,
          "scope is ",
          registration.scope
        );
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
