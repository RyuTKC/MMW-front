import React, {useState} from "react";


// hooks

export default function inputSet(props) {
  const [outputRes, setOutputRes] = useState("何が出るかな");
  const [inputValue, setInputValue] = useState("");
  const inputChange= (e)=>{
    setInputValue(e.target.value);
  };
  
  return (
    <>
      <h1>{props.top}</h1>
      <input type="input" value={inputValue} onChange={inputChange}></input>
      <button onClick={()=> setOutputRes(inputValue)}>出すもの変えるボタン</button>
      <h2>{outputRes}</h2>
    </>
  );
}
