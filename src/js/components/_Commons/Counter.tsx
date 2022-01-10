import React from "react"
import { useSelector, useDispatch } from "react-redux"
import store, { RootStateType } from "reducks/store";
import { decrementAction, incrementAction } from "reducks/Counter/action"
import { decrementAction2, incrementAction2 } from "reducks/Counter2/action"
import { Increment2thunk } from "reducks/Counter2/operations";
import { getCount2Value } from "reducks/Counter2/selectors";

export default () => {
  const countState = useSelector((state: RootStateType) => state.count)
  const count2State = useSelector((state: RootStateType) => state.count2)
  const count2State_select = getCount2Value(count2State)
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

  const onIncrement2thunk = () => {
    dispatch(Increment2thunk())
  }
  const onDecrement2thunk = () => {
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
      <div>{count2State_select}</div>
      <button onClick={onIncrement2}>ぷらす</button>
      <button onClick={onDecrement2}>まいなす</button>
      <button onClick={onIncrement2thunk}>ぷらすさんく</button>
      <button onClick={onDecrement2thunk}>まいなすさんく</button>
    </>
  )
}