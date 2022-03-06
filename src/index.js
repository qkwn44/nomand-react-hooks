import { type } from "@testing-library/user-event/dist/type";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useBeforeLeave
//탭을 닫을 때 실행되는 function
const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    //component가 마운트 됐을 때 이벤트 리스너 등록 & handle함수 실행
    document.addEventListener("mouseleave", handle);

    //componentWillUnMount땐 이벤트 제거
    return () => document.removeEventListener("mouseleave", handle);
    //계속해서 이벤트가 추가 되는 걸 막아주기 위해 빈 배열 작성
  }, []);
  const handle = (event) => {
    // console.log(event);
    const { clientY } = event;

    //만약  clientY > 0 보다 크면(마우스가 위로 벗어날 때만 onBefore 실행
    if (clientY <= 0) onBefore();
  };
  if (typeof onBefore !== "function") return;
};
const App = () => {
  const begForLife = () => {
    console.log("plz dont leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>useBeforeLeave</h1>
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

//https://velog.io/@dev-hannahk/react-custom-hooks#%F0%9F%A5%B3-%EC%99%84%EA%B0%95-%ED%9B%84%EA%B8%B0
//참고링크
