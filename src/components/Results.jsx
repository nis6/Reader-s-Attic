import ResultCard from "./ResultCards";
import { useEffect } from "react/cjs/react.development";
import { colors } from "../utilities";

export default function Results({ books }) {
  return (
    <div>
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
          books.map((item) => (
            <ResultCard
              key={item.id}
              title={item.volumeInfo.title}
              author={item.volumeInfo.authors}
              image={item.volumeInfo.imageLinks.thumbnail}
              summary={item.volumeInfo.description}
            />
          ))
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
