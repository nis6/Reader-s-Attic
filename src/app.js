import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Navbar } from "./components";
import { home_illustration } from "./assets";
import { GlobalStyle } from "./utilities";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      Hello
      <img src={home_illustration.home_illust}></img>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
