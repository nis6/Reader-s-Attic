// @ts-nocheck
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useState } from "react";
import PreviewModal from "./PreviewModal";
import { useMediaQuery } from "@chakra-ui/react";
import {
  ResultsContainer,
  Title,
  Summary,
  Preview,
  BookmarkButton,
  BookmarkButtonFilled,
} from "./ResultCards.elements";
import React from "react";

function ResultCard(props) {
  const [BookMarked, setBookMarked] = useState(false);
  const [showPreviewModal, setPreviewModal] = useState(false);
  const [matches] = useMediaQuery("(max-width: 500px)");

  function toggleBookMark() {
    setBookMarked(!BookMarked);
  }
  function togglePreviewModal() {
    setPreviewModal(!showPreviewModal);
  }
  return (
    <ResultsContainer>
      <Title>{matches ? <h5>{props.title}</h5> : <h4>{props.title}</h4>}</Title>
      <div
        style={{
          fontSize: matches ? "1rem" : "1.3rem",
          gridRow: matches ? "2 / span 1" : "2 / span 2",
          gridColumn: matches ? "1 / span 2" : "1 / span 1",
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
          gridRow: matches ? "1/span 2" : "1/ span 3",
          gridColumn: matches ? "3/ span 2" : "2 / span 1",
        }}
      >
        <img
          src={props.image}
          alt="A little life"
          style={{
            height: matches ? "6rem" : "14rem",
            width: "auto",
            boxShadow: `3px 3px 4px 1px rgba(255, 255, 255, 0.4)`,
          }}
        />
      </div>
      <Summary
        style={{
          gridRow: matches ? "3/span 2" : "1/span 2",
          gridColumn: matches ? "1/ span 4" : "3/ span 2",
        }}
      >
        {props.summary}
      </Summary>

      <Preview
        style={{
          width: matches ? "100%" : "50%",
          gridRow: matches ? "5/span 1" : "3 / span 1",
          gridColumn: matches ? "1/ span 2" : "3 / span 1",
        }}
        onClick={() => togglePreviewModal()}
        onBlur={() => togglePreviewModal()}
      >
        Preview
      </Preview>
      {console.log("showPreviewModal: ", showPreviewModal)}
      <PreviewModal
        showModal={showPreviewModal}
        identifier={props.identifier}
        ontheClose={() => {
          setPreviewModal(false);
        }}
      />
      {!BookMarked ? (
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
