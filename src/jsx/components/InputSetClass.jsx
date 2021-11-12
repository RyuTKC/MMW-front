import React, { useState } from "react";


// class

class InputCompo extends React.Component {

  constructor() {
    super(props);
    this.state = { inputValue: "何が出るかなクラスコンポーネント" }
  }

  render() {
    return (
      <>
        <h1>class-LocalState</h1>
        <input type="input" value={this.state.inputValue}></input>
      </>
    )
  }
}

class SetButtonCompo extends React.Component {
  constructor() {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <InputCompo></InputCompo>
        <button onClick={ }>出すもの変えるボタン</button>
        <h2>{ }</h2>
      </>
    )
  }
}

export default function inputSet(props) {
  const [outputRes, setOutputRes] = useState("何が出るかな");
  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const changeOutput = () => {
    setOutputRes(inputValue)
  }

  return (
    <>
      <h1>class-LocalState</h1>
      <input type="input" value={inputValue} onChange={inputChange}></input>
      <button onClick={changeOutput}>出すもの変えるボタン</button>
      <h2>{outputRes}</h2>
    </>
  );
}
