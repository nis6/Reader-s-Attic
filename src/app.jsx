import * as React from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { Home } from "./Pages";
import { GlobalStyle } from "./utilities";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}
export default App;
