import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FetchData } from "view-analytics";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FetchData owner="aulakh16">
    <App />
  </FetchData>
);
