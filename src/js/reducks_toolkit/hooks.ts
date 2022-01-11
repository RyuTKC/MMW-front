import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootStateType, AppDispatch } from "reducks_toolkit/store";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector