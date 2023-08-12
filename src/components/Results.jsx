import ResultCard from "./ResultCards";
import { colors } from "../utilities";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";

function Results({ books }) {
  function hasIdentifier(item) {
    if (item.volumeInfo.industryIdentifiers) return true;
    else return false;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!books.length ? (
        <h3
          style={{
            margin: "2rem 0 2rem 0",
            borderBottom: `${colors.marigold} solid 1px`,
          }}
        >
          No books yet :(
        </h3>
      ) : (
        books.filter(hasIdentifier).map((item) => {
          console.log("here is the book info: ", item);
          console.log("previewLink: " + item.volumeInfo.previewLink);
          return (
            <ResultCard
              key={item.id}
              title={item.volumeInfo.title}
              author={item.volumeInfo.authors}
              image={item.volumeInfo.imageLinks.thumbnail}
              summary={item.volumeInfo.description}
              identifier={item.volumeInfo.industryIdentifiers[0].identifier}
            />
          );
        })
      )}
    </div>
  );
}

const WrappedResults = (props) => {
  return (
    <ErrorBoundary>
      <Results books={props.books} />
    </ErrorBoundary>
  );
};

export default WrappedResults;
