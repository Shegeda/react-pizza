import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

//Метод з документації Redux Toolkit (отримання типу з усього state redux)
export type RootState = ReturnType<typeof store.getState>

//Метод з документації Redux Toolkit (отримання типів для dispatch )
export type AppDispatch = typeof store.dispatch

//Використовувати в додатку (Home.tsx) useAppDispatch, замість звичайного useDispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
