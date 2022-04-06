import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import dotenv from "dotenv";
dotenv.config();

const CONTRACT_ADDRESS =
  process.env.REACT_APP_MYEPICGAME_CONTRACT_ADDRESS_RINKEBY;

ReactDOM.render(
  <React.StrictMode>
    <App CONTRACT_ADDRESS={CONTRACT_ADDRESS} />
  </React.StrictMode>,
  document.getElementById("root")
);
