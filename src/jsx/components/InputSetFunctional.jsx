import React, {useState} from "react";


// hooks and no name function export
export default (props) =>  {
  const [outputRes, setOutputRes] = useState("何が出るかなファンクショナルコンポーネント");
  const [inputValue, setInputValue] = useState("");
  const inputChange= (e)=>{
    setInputValue(e.target.value);
  };
  
  return (
    <>
      <h1>fanctional-LocalState</h1>
      <input type="input" value={inputValue} onChange={inputChange}></input>
      <button onClick={()=> setOutputRes(inputValue)}>出すもの変えるボタン</button>
      <h2>{outputRes}</h2>
    </>
  );
}
