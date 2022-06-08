import ResultCard from "./ResultCards";
import { useEffect } from "react/cjs/react.development";

export default function Results({ books }) {
  return (
    <div>
      {!books.length ? (
        <h2> No books yet :( </h2>
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
      )}
    </div>
  );
}
