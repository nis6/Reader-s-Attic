import ResultCard from "./ResultCards";

export default function Results({ books }) {
  return (
    <div>
      {!books.length ? (
        <h2>No books yet :(</h2>
      ) : (
        books.map((item) => (
          <ResultCard
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
