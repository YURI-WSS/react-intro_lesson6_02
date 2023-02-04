// 書き換え-40. 注意事項（Reactのバージョン）
import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
