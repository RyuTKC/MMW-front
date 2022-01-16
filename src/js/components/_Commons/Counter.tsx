import React from "react"
import { useDispatch, useSelector } from "react-redux"
import store, { RootStateType } from "reducks/store";
import { decrementAction, incrementAction } from "reducks/Counter/action"
import { decrementAction2, incrementAction2 } from "reducks/Counter2/action"
import { Increment2thunk } from "reducks/Counter2/operations";
import { getCount2Value } from "reducks/Counter2/selectors";
import { useAppSelector, useAppDispatch } from "reducks/hooks";

export default () => {
  const countState = useSelector((state: RootStateType) => state.count)
  const count2State = useSelector((state: RootStateType) => state.count2)
  const count2State2 = useAppSelector((state: RootStateType) => state.count2)
  const count2State_select = getCount2Value(count2State)
  const myDispatch = useAppDispatch()
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

  const onIncrement2myDisp = () => {
    myDispatch(incrementAction2)
  }
  const onDecrement2myDisp = () => {
    myDispatch(decrementAction2)
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
      <div>{count2State2.value}</div>
      <button onClick={onIncrement2}>ぷらす</button>
      <button onClick={onDecrement2}>まいなす</button>
      <button onClick={onIncrement2myDisp}>ぷらすまいですぷ</button>
      <button onClick={onDecrement2myDisp}>まいなすまいですぷ</button>
      <button onClick={onIncrement2thunk}>ぷらすさんく</button>
      <button onClick={onDecrement2thunk}>まいなすさんく</button>
    </>
  )
}