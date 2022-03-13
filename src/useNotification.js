import { type } from "@testing-library/user-event/dist/type";
import { isElementType } from "@testing-library/user-event/dist/utils";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useNotification
const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNotifi = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotifi;
};

const App = () => {
  const triggerNotif = useNotification("can i steal you kimbab?");
  return (
    <div className="App">
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Hello</button>
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
