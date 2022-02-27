import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    // html tag의 title
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  //컴포넌트가 마운트될 때 updateTitle 함수 호출 (첫번째인자)
  //title이 업데이트 되면 updateTitle 재호출 (두번째인자)
  useEffect(updateTitle, [title]);
  //제목 업데이트를 위해 setTitle 리턴
  return setTitle;
};
const App = () => {
  //loading을 useTitle의 기본값으로 사용
  //titleUpdater은 setTitle과 동일

  //useTitle의 기본값 설정 : "Loading..." 3초 후에 title 업데이트
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 3000);
  return (
    <div className="App">
      <div>useTitle</div>
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
