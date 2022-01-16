import { RootStateType } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const mySelector: TypedUseSelectorHook<RootStateType> = useSelector
