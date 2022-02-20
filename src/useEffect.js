import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

//useEffect
// 첫 로드 될 때와 버튼을 누를 때마다 sayHello함수가 실행됨을 볼 수 있다.
// => componentDidmount, coponentDidUpdate 역할 모두를 수행
// 2개의 인자를 가짐.

// 첫번째는 function으로써의 effect
// 두번째는, 만약 deps가 있다면 effect는 (deps)리스트에 있는 값일 때만 값이 변하도록 활성화.

const App = () => {
  //component가 mount 되자마자 function 실행
  const sayHello = () => console.log("hello");
  // useEffect(() => {
  //   sayHello();
  // });  useEffect(sayHello)와 동일하게 작성가능;

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  //number가 변할 때만 sayHello가 작동하도록 변경
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
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
