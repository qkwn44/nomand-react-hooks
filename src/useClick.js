import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  //useEffect : refer 안에 element.current가 있으면 클릭이벤트 실행
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //useEffect에서 return한 함수는 componentWillUnmount 때 호출된다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // componentWillDidMount될 때 단 한번만 실행하기 위해
    //두번째 인자로 빈 배열을 넣어준다.
  }, []);
  if (typeof onClick !== "function") {
    return;
  }
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
