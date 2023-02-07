import React, { useState } from "react";
import ReactDom from "react-dom";
import ColorfulMessage from "./components/ColofulMwssage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};

export default App;
