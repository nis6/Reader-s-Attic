import React from "react";
import GlobalStyle from "./utilities/Global";
import Home from "./Pages/Home";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
