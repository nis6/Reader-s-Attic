import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react/cjs/react.development";
import Results from "./Results";
import {
  SearchBarContainer,
  SearchContainer,
  Input,
  SearchButton,
} from "./SearchBar.elements";

export const SearchBar = () => {
  const [params, setParams] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    requestBooks();
    // return () => {
    //   cleanup
    // };
  }, []);

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
            console.log(
              "Title of the book: ",
              JSON.stringify(item.volumeInfo.title)
            )
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
      {/* <ResultCard
        title="pride and prejudice"
        author="Jane Austen"
        summary="Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry."
        image="data:image/jpeg;base64,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"
      />  FOR DEBUGGING PURPOSE*/}
      <Results books={books} />
    </SearchContainer>
  );
};
