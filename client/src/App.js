import React from "react";
import "./App.css";
import generateStore from "./Redux/store";
import { Provider } from "react-redux";
import Routes from "./Routes/Routes";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
