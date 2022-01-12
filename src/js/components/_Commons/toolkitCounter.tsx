import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useAppSelector, useAppDispatch } from "reducks_toolkit/hooks"
import { incrementAction3, decrementAction3 } from "reducks_toolkit/Counter3/action";
import { Increment3thunk2 } from "reducks_toolkit/Counter3/operations";
import { decrement, increment } from "reducks_toolkit/Counter3/slice";
import toolkitStore, { RootStateType } from "reducks_toolkit/store";

export default () => {
  const toolkitCount = useAppSelector(state => state.count3.value)
  const dispatch = useAppDispatch()

  const onIncrement = () => {
    dispatch(increment())
  }
  const onDecrement = () => {
    dispatch(decrement())
  }

  const onIncrementThunk = async () => {
    Increment3thunk2()
  }


  return (
    <>
      <div>かうんとつーるきっと</div>
      <div>{toolkitCount}</div>
      <div>{toolkitStore.getState().count3.value}</div>
      <button onClick={onIncrement}>ぷらすつーるきっと</button>
      <button onClick={onDecrement}>まいなすつーるきっと</button>
      <button onClick={onIncrementThunk}>ぷらすつーるきっとさんく</button>
    </>
  )
}