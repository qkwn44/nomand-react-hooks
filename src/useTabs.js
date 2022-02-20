import React,{ useState } from "react";
import { ReactDOM } from "react";

const content = [
  { tab: "section1", content: "i'm the content of the Section 1" },
  { tab: "section2", content: "i'm the content of the Section 2" },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  return {
    currentItem: allTabs[currentIdx],
    changeItem : setCurrentIdx
  };
};

function App = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
