import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import SearchBar from "./../components/SearchBar.jsx";
import Socials from "./../components/socials.jsx";
import { home_illustrations } from "../assets/index.js";
import { SearchComponent } from "./Search.element";
import { defaultTheme } from "../utilities/theme.js";

const Search = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          top: "8vh",
          marginTop: "3rem",
        }}
      >
        <SearchComponent>
          <p>Search any</p>
          <h2
            style={{
              fontSize: defaultTheme.typeScale.header2,
              fontWeight: "100",
              padding: "0",
            }}
          >
            Book
          </h2>
          <SearchBar />
          <img
            src={home_illustrations.bookShelf}
            alt="BookShelf"
            style={{ width: "40%", marginTop: "2rem" }}
          />
        </SearchComponent>
      </div>
      <div
        style={{
          position: "fixed",
          left: "1vw",
          bottom: "0",
        }}
      >
        <Socials />
      </div>
    </div>
  );
};

export default Search;
