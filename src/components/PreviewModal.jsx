import ReactDOM from "react-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import Viewer from "./Viewer";
import styled from "styled-components";
import { colors } from "../utilities";
import { home_illustrations } from "../assets";
const modalRoot = document.getElementById("modal");

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  width: 80vw;
  height: 94vh;
  background-color: ${colors.beige100};
`;

export const ButtonDark = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 0.6rem;
  color: ${colors.indianred};
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2000;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.3);
`;

const PreviewModal = ({ identifier, showModal, ontheClose }) => {
  if (!showModal) {
    console.log("No Modal to be shown!");
    return null;
  }
  console.log("Reached Modal!");
  return ReactDOM.createPortal(
    <Overlay>
      <PreviewContainer>
        <img
          src={home_illustrations.preview}
          alt="preview"
          style={{ width: "15%", marginBottom: "1rem" }}
        />
        <ButtonDark type="submit" onClick={ontheClose}>
          <AiFillCloseSquare size="1.8rem" />
        </ButtonDark>
        <Viewer identifier={identifier} />
      </PreviewContainer>
    </Overlay>,
    modalRoot
  );
};

export default PreviewModal;
