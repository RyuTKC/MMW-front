import React, { useState } from "react";


// class

class InputSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      outputValue: "何が出るかなクラスコンポーネント"
    }

    this.setInput = this.setInput.bind(this);
    this.setOutput = this.setOutput.bind(this);
  }

  setInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  setOutput() {
    this.setState({
      outputValue: this.state.inputValue
    });
  }

  render() {
    return (
      <>
        <h1>class-LocalState</h1>
        <input type="input" onChange={this.setInput} value={this.state.inputValue}></input>
        <button onClick={this.setOutput}>出すもの変えるボタン</button>
        <h2>{this.state.outputValue}</h2>
      </>
    )
  }
}

export default InputSet
