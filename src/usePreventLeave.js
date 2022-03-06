import { type } from "@testing-library/user-event/dist/type";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//usePreventLeave
// 사용자가 데이터를 저장하지 않고 브라우저를 종료 시킬 때 확인창 오픈
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  //beforeunload : window가 닫히지 전에 function 실행
  const enablePrevet = () => window.addEventListener("beforeunload", listener);
  const disablePrevet = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevet, disablePrevet };
};

const App = () => {
  const { enablePrevet, disablePrevet } = usePreventLeave();
  return (
    <div className="App">
      <h1>usePreventLeave</h1>
      <button onClick={enablePrevet}>Protect</button>
      <button onClick={disablePrevet}>Protect</button>
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
