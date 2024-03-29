import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { type } from "@testing-library/user-event/dist/type";
import { isElementType } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { StrictMode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

//useAxios
const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  //useEffect call axios
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(new Date());
  };
  useEffect(() => {
    //axios instance use
    //options인 configuration 전달
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((err) => {
        setState({ ...state, loading: false, err });
      });
    //trigerr watching
  }, [trigger]);
  //new func retunr
  return { ...state, refetch };
  if (!opts.url) {
    return;
  }
};
//axios 약간의 customization, configuration 하용

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json ",
  });

  console.log(
    `Loading: ${loading}, Error: ${error}, Data: ${JSON.stringify(data)},`
  );
  return (
    <div className="app-box" style={{ height: "1000vh" }}>
      <h1>Welcome to React Custom Hooks Page</h1>
      <h2>#10. useAxios</h2>
      <h3>{data && data.status}</h3>
      <div>{loading && "Loading"}</div>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
export default useAxios;
