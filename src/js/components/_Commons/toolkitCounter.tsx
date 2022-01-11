import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useAppSelector, useAppDispatch } from "reducks_toolkit/hooks"
import { incrementAction3, decrementAction3 } from "reducks_toolkit/Counter3/action";
import { Increment3thunk2 } from "reducks_toolkit/Counter3/operations";
// import { decrement, increment } from "reducks_toolkit/Counter3/slice";
import store, { RootStateType } from "reducks_toolkit/store";

export default () => {
  const toolkitCount = useAppSelector(state => state.count3.value)
  const dispatch = useAppDispatch()

  const onIncrement = () => {
    dispatch(incrementAction3)
  }
  const onDecrement = () => {
    dispatch(decrementAction3)
  }

  const onIncrementThunk = () => {
    // dispatch(Increment3thunk2())
    // toolkitStore.dispatch(Increment3thunk2())
  }
  // const onDecrement2thunk = () => {
  //   dispatch(decrementAction2)
  // }

  return (
    <>
      <div>かうんとつーるきっと</div>
      <div>{toolkitCount}</div>
      <div>{store.getState().count3.value}</div>
      <button onClick={onIncrement}>ぷらすつーるきっと</button>
      <button onClick={onDecrement}>まいなすつーるきっと</button>
      <button onClick={onIncrementThunk}>ぷらすつーるきっとさんく</button>
    </>
  )
}