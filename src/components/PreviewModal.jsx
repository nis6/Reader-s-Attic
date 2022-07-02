import ReactDOM from "react-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import Viewer from "./Viewer";
import styled from "styled-components";
import { colors } from "../utilities";
import { defaultTheme } from "../utilities/theme";

const modalRoot = document.getElementById("modal");

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px whitesmoke;
  background-color: black;
  width: 80vw;
  height: 94vh;
  background-color: ${colors.ivory100};
`;

export const ButtonDark = styled.button`
  background: transparent;
  border: none;
  padding: 0.6rem;
  color: ${colors.night};
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  position: absolute;
  right: 10px;
  top: 10px;
`;

const PreviewModal = ({ previewLink, showModal, onClose }) => {
  if (!showModal) {
    console.log("No Modal to be shown!");
    return null;
  }
  console.log("Reached Modal!");
  return ReactDOM.createPortal(
    <PreviewContainer>
      <ButtonDark type="submit" onClick={onClose}>
        <AiFillCloseSquare size="1.8rem" />
      </ButtonDark>
      <Viewer bookPreviewLink={previewLink} />
    </PreviewContainer>,
    modalRoot
  );
};

export default PreviewModal;