import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

const content = [
  { tab: "section1", content: "i'm the content of the Section 1" },
  { tab: "section2", content: "i'm the content of the Section 2" },
];

const useTabs = (initialTab, allTabs) => {
  //useState는 항상 initialTab(디폴트값)를 갖는다
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  //만약 allTabs가 (true가)아니거나 allTabs가 배열이라면
  if (!allTabs || Array.isArray(allTabs)) {
    return;
  }

  //버튼 클릭 후 현재 선택한 content의 index값을 갖도록 하면 된다.
  return {
    //기본적으로 currentItem은 allTabs[currentIdx] 값을 가짐.
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

const App = () => {
  //초기에 initialTab값을 갖고 싶으면 useTabs의 첫번째 배열을 갖도록 하면 된다.
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div> {currentItem.content}</div>
    </div>
  );
};

//초기에 content의 첫 번째 배열을 갖는다.
//만약 allTabs가 true값을 갖거나, 배열일 경우 값 리턴.

//useTabs는 currentItem을 리턴.

//Array.isArray() 해당 인자가 배열인지

// 클릭 후 현재 클릭 한 content의 index값을 갖도록 한다.

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
