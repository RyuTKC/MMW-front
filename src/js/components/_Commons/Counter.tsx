import React from "react"
import { useSelector, useDispatch } from "react-redux"
import store, { RootState } from "reducks/store";
import { decrementAction, incrementAction } from "reducks/Counter/action"
import { decrementAction2, incrementAction2 } from "reducks/Counter2/action"

export default () => {
  const countState = useSelector((state: RootState) => state.count)
  const count2State = useSelector((state: RootState) => state.count2)
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(incrementAction())
  }
  const onDecrement = () => {
    dispatch(decrementAction())
  }
  
  const onIncrement2 = () => {
    dispatch(incrementAction2)
  }
  const onDecrement2 = () => {
    dispatch(decrementAction2)
  }

  return (
    <>
      <div>かうんと</div>
      <div>{countState.value}</div>
      <div>{store.getState().count.value}</div>
      <button onClick={onIncrement}>ぷらす</button>
      <button onClick={onDecrement}>まいなす</button>
      <div>かうんと２</div>
      <div>{count2State.value}</div>
      <div>{store.getState().count2.value}</div>
      <button onClick={onIncrement2}>ぷらす</button>
      <button onClick={onDecrement2}>まいなす</button>
    </>
  )
}