import React from "react";
import ReactDom from "react-dom";
import ColorfulMessage from "./components/ColofulMwssage";

const App = () => {
  const onClickButton = () => alert();
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
