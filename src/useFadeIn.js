import { type } from "@testing-library/user-event/dist/type";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useFadeln
const useFadeln = (duration = 1, delay = 0) => {
  //기본값 duration 1s
  const element = useRef();
  //element안으로 나타나게 하기 위해 useEffect 작성
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
      //component가 mounte되면 문구가 페이드아웃되도록 작성
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") return;

  // return element;
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInTitle = useFadeln(1, 2);
  const fadeInTxt = useFadeln(5, 10);
  return (
    <div className="App">
      <h1>useFadeln</h1>
      <h3 {...fadeInTitle}>Hello</h3>
      <p {...fadeInTxt}>react hooks useFadeIn</p>
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
