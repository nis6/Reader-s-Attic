import styled from "styled-components";
import { colors } from "../utilities";
import { useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import React from "react";

const ViewerCanvas = styled.div`
  width: 75vw;
  height: 80vh;
  background-color: ${colors.ivory100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Viewer = ({ identifier }) => {
  const canvasViewer = useRef(null);
  const [loaded, setLoaded] = useState(false);

  function alertNotFound() {
    alert("could not load the preview");
  }
  console.log("oye this is your input: ", identifier);
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.type = "text/javascript";
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);
    scriptTag.addEventListener("load", () => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasViewer.current);
        viewer.load("ISBN:" + identifier, alertNotFound);
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasViewer.current);
          window.viewer = viewer;
          viewer.load("ISBN:" + identifier, alertNotFound);
        });
      }
    }
  }, [loaded]);

  function alertNotFound() {
    alert("could not embed the book!");
  }

  return (
    <div>
      {loaded ? (
        <ViewerCanvas>
          <div
            ref={canvasViewer}
            id="viewerCanvas"
            style={{ width: "700px", height: "800px" }}
          >
            canvasViewer rendered
          </div>
        </ViewerCanvas>
      ) : (
        <div style={{ width: "75vw", height: "80vh", backgroundColor: "black" }}>
          empty
        </div>
      )}
    </div>
  );
};

export default Viewer;
