import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();

  if (typeof onClick !== "function") {
    return;
  }

  //useEffect : refer 안에 element.current가 있으면 클릭이벤트 실행
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>useClick</h1>
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
