import React from "react";
import ReactDOM from "react-dom/client";

import "~/assets/styles/globals.css";
import PopupPage from "./Popup";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PopupPage />
  </React.StrictMode>,
);
