import * as React from "react";
import GlobalStyle from "./utilities/Global";
import Home from "./Pages/Home.jsx";
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
