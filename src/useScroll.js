import { type } from "@testing-library/user-event/dist/type";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useScroll
//스크롤 이벤트를 통해 스크롤 위치의 변화에 따른 상태 변경

//useEffect를 통해 이벤트 리스너로 스크롤 이벤트를 받아 onScroll callback func 호출,
//리턴할 때 이벤트 리스너 제거
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  //scroll 이벤트 발생 시 state의 x값과 y값을 window.scroll 값으로 업데이트 해준다
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

//useScroll를 통해 y좌표를 받아온다
//y 좌표 상태에 따라 색생값을 다르게 지정
const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        useScroll
      </h1>
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
