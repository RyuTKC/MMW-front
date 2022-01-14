import { AppDispatchType, RootStateType } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const myDispatch = useDispatch<AppDispatchType>()
export const mySelector: TypedUseSelectorHook<RootStateType> = useSelector
