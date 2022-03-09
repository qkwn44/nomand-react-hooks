import { type } from "@testing-library/user-event/dist/type";
import { isElementType } from "@testing-library/user-event/dist/utils";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useScroll
const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    //현재 요소가 존재한다면
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "we ar full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img ref={element} width={200} src="img/img.jpeg" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
