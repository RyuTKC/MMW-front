import React, { useState } from "react";


// class

class InputSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      outputValue: "何が出るかなクラスコンポーネント",
      count: 0
    }

    this.setInput = this.setInput.bind(this);
    this.setOutput = this.setOutput.bind(this);
  }
  

  // 関数
  setInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 関数
  setOutput() {
    this.setState({
      outputValue: this.state.inputValue
    });
  }

  render() {
    return (
      <>
        <h1>class-LifeCycle</h1>
        <input type="check" onChange={this.setInput} value={this.state.inputValue}></input>
        <button onClick={this.setOutput}>出すもの変えるボタン</button>
        <h2>{this.state.outputValue}</h2>
      </>
    )
  }
}

export default InputSet
