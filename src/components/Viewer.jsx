import styled from "styled-components";
import { colors } from "../utilities";
import { defaultTheme } from "../utilities/theme";
import { useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";

const ViewerCanvas = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${colors.ivory200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Viewer = ({ ISBN_number }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.type = "text/javascript";
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    else {
    }
  }, [loaded]);

  function alertNotFound() {
    alert("could not embed the book!");
  }

  return (
    <div>
      {loaded ? (
        <ViewerCanvas>
          <div ref={canvasRef.current} id="viewerCanvas"></div>
        </ViewerCanvas>
      ) : (
        "script not loaded"
      )}
    </div>
  );
};

export default Viewer;
