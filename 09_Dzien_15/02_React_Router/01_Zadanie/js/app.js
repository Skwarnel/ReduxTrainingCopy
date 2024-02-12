import React from "react";
import { createRoot } from "react-dom/client";
import Cart from "./components/Cart";
import store from "./redux/store";
import {Provider} from "react-redux";
const App = () => <Cart />;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
