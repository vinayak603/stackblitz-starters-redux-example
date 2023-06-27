import React from "react";
import store from './store';
import Counter from "./counter"
import { Provider } from "react-redux";
import "./style.css";

export default function App() {
  return (
    <Provider store = {store}>
      <Counter />
    </Provider>

  );
}
