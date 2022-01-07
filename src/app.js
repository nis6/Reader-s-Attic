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
      <div style={{ width: "90vw", position: "absolute", bottom: "20vh" }}>
        <img
          src={home_illustration.home_illust}
          style={{ width: "100%" }}
        ></img>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
