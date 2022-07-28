import ResultCard from "./ResultCards";
import { useEffect } from "react/cjs/react.development";
import { colors } from "../utilities";

export default function Results({ books }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {books ? (
        !books.length ? (
          <h3
            style={{
              margin: "2rem 0 2rem 0",
              borderBottom: `${colors.marigold} solid 1px`,
            }}
          >
            No books yet :(
          </h3>
        ) : (
          books.map((item) => {
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
        )
      ) : (
        <h3
          style={{
            margin: "2rem 0 2rem 0",
            borderBottom: `${colors.indianred} solid 1px`,
          }}
        >
          Sorry we cannot find this one!
        </h3>
      )}
    </div>
  );
}
