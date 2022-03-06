import { type } from "@testing-library/user-event/dist/type";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useNetwork
//navigator online/offline 되는걸 막아주는 리액트 훅

//상태가 바뀔때 마다 (networK) 함수 호출
// 기본값으로 navigator.online
//navigator.onLine true or false 값 리턴
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    //두가지 경우를 하나의 onChange 함수로 다뤄주기
    if (typeof onChange === "function") onChange(navigator.onLine);
    //만약 온라인 상태면 setStatus의 navigator의 online은 offline로 변경, 반대의 경우도 동일
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    //componentWillUnMount일 때 함수 종료시켜주기

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  //navigator가 online이면 항상 현재의 status 리턴
  return status;
};
const App = () => {
  const handleNetworkChnage = (online) => {
    console.log(online ? "we just went online" : "we are offline!");
  };
  const onLine = useNetwork(handleNetworkChnage);
  return (
    <div className="App">
      <h1>useNetwork</h1>
      <p>current status : {onLine ? "Online" : "Offline"}</p>
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
