import React from "react";
import ReactDOM from "react-dom/client";

import "~/assets/styles/globals.css";
import OptionsPage from "./options";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OptionsPage />
  </React.StrictMode>,
);
