import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useState } from "react";
import styled from "styled-components";
import {
  ResultsContainer,
  Title,
  Summary,
  Preview,
  BookmarkButton,
  BookmarkButtonFilled,
} from "./ResultCards.elements";

function ResultCard(props) {
  const [BookMarked, setBookMarked] = useState(false);
  function toggleBookMark() {
    setBookMarked(!BookMarked);
  }
  return (
    <ResultsContainer>
      <Title>
        <h4>{props.title}</h4>
      </Title>
      <div
        style={{
          fontSize: "1.3rem",
          gridRow: "2 / span 2",
          gridColumn: "1 / span 1",
          alignSelf: "start",
        }}
      >
        <figcaption>
          By <br /> {props.author}
        </figcaption>
      </div>
      <div
        style={{
          padding: "0.5rem",
          gridRow: "1/ span 3",
          gridColumn: "2/ span 1",
        }}
      >
        <img
          src={props.image}
          alt="A little life"
          style={{
            height: "14rem",
            width: "auto",
            boxShadow: `3px 3px 4px 1px rgba(255, 255, 255, 0.4)`,
          }}
        />
      </div>
      <Summary>{props.summary}</Summary>
      <Preview>Preview</Preview>
      {BookMarked ? (
        <BookmarkButton type="submit" onClick={() => toggleBookMark()}>
          <BsBookmarkHeart size="1.8rem" />
        </BookmarkButton>
      ) : (
        <BookmarkButtonFilled type="submit" onClick={() => toggleBookMark()}>
          <BsBookmarkHeartFill size="1.8rem" />
        </BookmarkButtonFilled>
      )}
    </ResultsContainer>
  );
}

export default ResultCard;

// const [BookMarked, setBookMarked] = useState(fasle);
// function toggleBookMark() {
//   setBookMarked(!BookMarked);
// }

//  {
//    BookMarked ? (
//      <BookmarkButton type="submit" onClick={() => toggleBookMark()}>
//        <BsBookmarkHeart size="1.8rem" />
//      </BookmarkButton>
//    ) : (
//      <BookmarkButton type="submit" onClick={() => toggleBookMark()}>
//        <BsBookmarkHeartFill size="1.8rem" />
//      </BookmarkButton>
//    );
//  }
