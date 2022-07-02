import styled from "styled-components";
import { colors } from "../utilities";
import { defaultTheme } from "../utilities/theme";

const ViewerCanvas = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${colors.ivory200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Viewer = (props) => {
  // function alertNotFound() {
  //   alert("could not embed the book!");
  // }

  // function initialize() {
  //   var viewer = new google.books.DefaultViewer(
  //     document.getElementById("viewerCanvas")
  //   );
  //   viewer.load("ISBN:1234", alertNotFound);
  // }
  return <ViewerCanvas>This is viewer canvas.</ViewerCanvas>;
};

export default Viewer;
