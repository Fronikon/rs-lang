import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatchType, StoreType } from "../store/store";

export const useCustomDispatch = () => useDispatch<AppDispatchType>();
export const useCustomSelector: TypedUseSelectorHook<StoreType> = useSelector;