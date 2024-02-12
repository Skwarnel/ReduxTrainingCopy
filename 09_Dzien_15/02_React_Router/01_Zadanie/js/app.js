import React from "react";
import {createRoot} from "react-dom/client";
import Cart from "./components/Cart";
import store from "./redux/store";
import {Provider} from "react-redux";
import Form from "./components/Form";
// import List from "./components/List";

const App = () => {
    return <>
        <Cart/>
        <Form/>
    </>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
