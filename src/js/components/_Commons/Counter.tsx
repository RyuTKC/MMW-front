import React from "react"
import { useSelector, useDispatch } from "react-redux"
import store, { RootState } from "app-redux/store";
import { decrementAction, incrementAction } from "js/app-redux/Counter/action"

export default () => {
    const countState = useSelector((state: RootState) => state.count)
    const dispatch = useDispatch()
  
    const onIncrement = () => {
      dispatch(incrementAction())
    }
    const onDecrement=()=>{
      dispatch(decrementAction())
    }
  
    return (
        <>
            <div>{countState.value}</div>
            <div>{store.getState().count.value}</div>
            <button onClick={onIncrement}>ぷらす</button>
            <button onClick={onDecrement}>まいなす</button>
        </>
    )
}