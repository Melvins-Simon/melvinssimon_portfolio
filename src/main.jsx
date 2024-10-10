import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./utils/context/Index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
  </BrowserRouter>
);
