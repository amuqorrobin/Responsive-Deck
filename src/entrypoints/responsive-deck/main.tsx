import React from "react";
import ReactDOM from "react-dom/client";
import "~/assets/styles/globals.css";
import ResponsiveDeck from "./responsiveDeck";
import { TooltipProvider } from "@/components/base/ui/Tooltip";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider>
      <ResponsiveDeck />
    </TooltipProvider>
  </React.StrictMode>,
);
