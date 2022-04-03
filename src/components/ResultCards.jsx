import { colors } from "../utilities/Colors.js";
import styled from "styled-components";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  position: relative;
  height: 18rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 1rem 2rem;
  gap: 0.4rem 2rem;
  border: solid 1px ${colors.ivory100};
  margin: 2rem;
`;

const Preview = styled.button`
  align-self: start;
  width: 50%;
  grid-row: 3 / span 1;
  grid-column: 3 / span 1;
  background: transparent;
  border: solid 1px ${colors.ivory200};
  border-radius: 0.7rem;
  padding: 0.5rem 0.1rem;
  color: ${colors.ivory200};

  &:hover {
    border-color: ${colors.ivory100};
    color: ${colors.ivory100};
  }
  &:active {
    padding: 0.6rem 0.2rem;
    border-color: ${colors.ivory100};
    color: ${colors.ivory100};
  }
  &:focus {
    padding: 0.6rem 0.2rem;
    border-color: ${colors.ivory100};
    color: ${colors.ivory100};
  }
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 1rem;
  top: -0.1rem;
  color: ${colors.beige200};
  background: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  &:hover {
    color: ${colors.ivory100};
    transform: scale(1.1);
  }
  &:active {
    color: ${colors.indianred};
  }
  &:focus {
    color: ${colors.indianred};
  }
`;

function ResultCard(props) {
  return (
    <Container>
      <div
        style={{
          fontSize: "1.5rem",
          gridRow: " 1/ span 1",
          gridColumn: " 1/ span 1",
          alignSelf: "end",
        }}
      >
        <h4>{props.title}</h4>
      </div>
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
      <div
        style={{
          gridRow: "1/ span 2",
          gridColumn: "3/ span 2",
          color: `${colors.ivory200}`,
        }}
      >
        <p>{props.summary}</p>
      </div>
      <Preview>Preview</Preview>
      <BookmarkButton type="submit" onClick={() => toggleBookMark()}>
        <BsBookmarkHeart size="1.8rem" />
      </BookmarkButton>
    </Container>
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
