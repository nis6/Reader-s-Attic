import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import WrappedResults from "./Results";
import { colors } from "../utilities";
import {
  SearchBarContainer,
  SearchContainer,
  Input,
  SearchButton,
} from "./SearchBar.elements";

const SearchBar = () => {
  const [params, setParams] = useState("");
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   requestBooks();
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, []);

  async function requestBooks() {
    if (params) {
      let url =
        "https://www.googleapis.com/books/v1/volumes?download=epub&key=AIzaSyA9_SHTKmvhIqRiafx82tDuhsRyNSoXckU&q=";
      let param_arr = params.split(" ");
      let final_url = url + param_arr.join("+");
      const response = await fetch(final_url);
      console.log("response: ", response);
      console.log("typeof(response): ", typeof response);
      response.json().then(
        (results) => {
          setBooks(results.items);
          results.items.map((item) =>
            console.log("Title of the book: ", JSON.stringify(item.volumeInfo.title))
          );
          console.log("books from async  function: ", books);
        },
        (err) => console.log("Error Occured: ", err)
      );
    }
  }

  return (
    <SearchContainer>
      <SearchBarContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestBooks();
          }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input
            placeholder="Library is all yours..."
            onChange={(event) => setParams(event.target.value)}
            onBlur={(event) => setParams(event.target.value)}
          />
          <SearchButton type="submit">
            <BsSearch size="1.5rem" />
          </SearchButton>
        </form>
      </SearchBarContainer>
      {books ? (
        <WrappedResults books={books} />
      ) : (
        <h3
          style={{
            margin: "2rem 0 2rem 0",
            color: `${colors.indianred}`,
            borderBottom: `${colors.indianred} solid 1px`,
          }}
        >
          Sorry can't find this one!
        </h3>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
