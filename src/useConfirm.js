import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useConfrim
// 사용자가 버튼을 클릭하기 전(이벤트를 실행하기 전에) 메세지를 보여줄 수 있다.

//useConfirm은 message, onConfirm, onCancel을 매개변수로 받는다.
const useConfirm = (message = "", onCofirm, onCancel) => {
  //만약 onCofirm 매개변수가 없거나, 타입이 함수가 아니라면
  if (!onCofirm && typeof onCofirm !== "function") {
    //리턴값은 없다
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  //onConfirm함수는 confirmAction을 리턴
  //comfirmAction함수는
  const comfirmAction = () => {
    //confirm함수가 메세지를 가지고 있을 때
    if (window.confirm(message)) {
      //콜백함수 호출. 여기서 콜백함수는 deleteWolrd
      onCofirm();
      //취소를 누르면 (false)
    } else {
      //oncCancle 리턴
      onCancel();
    }
  };
  return comfirmAction;
};

const App = () => {
  const deleteWolrd = () => console.log("delete!");
  const abort = () => console.log("Aborted!");

  const confirmDelete = useConfirm("Are you sure?", deleteWolrd, abort);
  //confirmDelete함수는 comfirmAction를 라턴.
  return (
    <div className="App">
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
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
