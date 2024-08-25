import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStateProvider } from "./context/GlobalContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </ModalProvider>
  </StrictMode>
);
