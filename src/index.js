import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

//useInput : input 업데이트

//useInput의 값은 initialValue로 받아 useState의 inialValue로 전달.
// value와 같은 값을 가진다
const useInput = (initialValue, validator) => {
  //기본값을 value와 함께 return ! + onChange도 함께
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      //validator 타입이 func이라면
      willUpdate = validator(value);
    }
    if (willUpdate) {
      // willUpdate는 true. 항상 업데이트 완.
      setValue(value);
    }
  };
  return { value, onChange };
};
const App = () => {
  //기본값을 validator func에 있는 value로 전달
  //validator func이 true,false를 return
  const maxLen = (value) => value.length <= 10; //value의 길이 저장

  //name을 이용해 useInput에 Mr, maxLength 전달
  const name = useInput("Ms.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* name은 value와 동일한 값을 가짐 */}
      {/* value={name.value} onChange={name.onChange} 이렇게 작성하는 대신 {...name} 으로 작성할 수 았음 */}
      <input type="text" placeholder="Name" {...name} />
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
