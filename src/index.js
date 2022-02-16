import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

//hooks
function App() {
  //useState : 초기 state는 InitialState를 세팅할 수 있ㄴㄴ 옵션 제공
  //useState는 Array를 return , 첫번재 요소 item 두번째 요소 setItem
  //setItem : item의 값 변경해주는 기능
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to dee some magic happen! </h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrementItem</button>
    </div>
  );
}

//class형 컴포넌트 : this, setState 사용
class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to dee some magic happen! </h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrementItem</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppUgly />
  </StrictMode>,
  rootElement
);
