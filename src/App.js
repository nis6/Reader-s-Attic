import * as React from "react";
import GlobalStyle from "./utilities/Global";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Seacrh.jsx";
import Fav from "./Pages/Fav.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Fav />} />
      </Routes>
    </Router>
  );
};
export default App;
