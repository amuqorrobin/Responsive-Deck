import React from "react";
import ReactDOM from "react-dom/client";
import "~/assets/styles/globals.css";
import ResponsiveDeck from "./responsiveDeck";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResponsiveDeck />
  </React.StrictMode>,
);
