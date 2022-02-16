import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

//useInput : input 업데이트

//useInput의 값은 initialValue로 받아 useState의 inialValue로 전달.
// value와 같은 값을 가진다
const useInput = (initialValue) => {
  //기본값을 value와 함께 return ! + onChange도 함께
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target);
  };
  return { value, onChange };
};
const App = () => {
  const name = useInput("Ms.");
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* name은 value와 동일한 값을 가짐 */}
      {/* value={name.value} onChange={name.onChange} 이렇게 작성하는 대신 {...name} 으로 작성할 수 았음 */}
      <input
        type="text"
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />
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
