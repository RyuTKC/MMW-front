import React, {useState} from "react";


// hooks and no name function export
export default (props) =>  {
  const [outputValue, setOutputValue] = useState("何が出るかなファンクショナルコンポーネント");
  const [inputValue, setInputValue] = useState("");
  const setInput= (e)=>{
    setInputValue(e.target.value);
  };

  const setOutput= ()=>{
    setOutputValue(inputValue)
  };
  
  return (
    <>
      <h1>fanctional-LocalState</h1>
      <input type="input" value={inputValue} onChange={setInput}></input>
      <button onClick={setOutput}>出すもの変えるボタン</button>
      <h2>{outputValue}</h2>
    </>
  );
}
