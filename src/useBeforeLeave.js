import { type } from "@testing-library/user-event/dist/type";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useBeforeLeave
const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  if (typeof onBefore !== "function") return;
};

const App = () => {
  const begForLife = () => console.log("plz dont leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>useBeforeLeave</h1>
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
