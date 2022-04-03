import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { colors } from "../utilities";
import { defaultTheme } from "./../utilities/theme";
import { useState, useEffect } from "react/cjs/react.development";
import Modal from "./SearchResults";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.ivory100};
  margin-top: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 1.3rem;
  width: 100%;
  &:hover {
    border: ${colors.ivory200} solid 1px;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  color: ${colors.mainblue};
  padding: 0 0.2rem;
  margin: 0;
  border: none;
  &:hover {
    opacity: 0.6;
    transition: all 0.3s ease;
  }
`;

const Input = styled.input`
  padding: 0 0.4rem;
  flex-basis: 100%;
  border: none;
  height: 100%;
  font-size: ${defaultTheme.typeScale.header5};
  background: ${colors.ivory100};
  color: ${colors.mainblue};
  font-family: ${defaultTheme.SecondaryFont};
  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
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
      const response = await fetch(url + param_arr.join("+"));
      response.json().then(
        (results) => {
          results.items.map((item) => console.log(JSON.stringify(item.title)));
          setBooks(results);
        },
        (err) => console.log("Error Occured: ", err)
      );
    }
  }

  return (
    <div>
      <SearchBarContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestBooks(params);
          }}
        >
          <Input
            placeholder="Library is all yours..."
            onChange={(event) => setParams(event.target.value)}
          />
          <SearchButton type="submit">
            <BsSearch size="1.5rem" />
          </SearchButton>
        </form>
      </SearchBarContainer>
      {/* {
        <Modal>
          <Carousel>

          </Carousel>
          <div>
            <ResultCards props={ }/>
          </div>
        </Modal>
      } */}
    </div>
  );
};
export default SearchBar;
