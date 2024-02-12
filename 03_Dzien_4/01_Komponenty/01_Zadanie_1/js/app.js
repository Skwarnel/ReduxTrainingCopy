import React from "react";
import { createRoot } from "react-dom/client"
import { StopperWithTimer } from "./components/Stopper";

const App = () => (
  <div>
    <StopperWithTimer>czas start</StopperWithTimer>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
