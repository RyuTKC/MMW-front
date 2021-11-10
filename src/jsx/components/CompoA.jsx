import React, {useState} from "react";

export default function CompoA(props) {
  const [nickName, setNickName] = useState("パロパロ")
  console.log(nickName);

  return (
    <>
      <h1>{props.arg1}野郎が</h1>
      <input type=""></input>
      <button onClick={()=> setNickName("うんこ")}>小学生の発想ボタン</button>
    </>
  );
}
