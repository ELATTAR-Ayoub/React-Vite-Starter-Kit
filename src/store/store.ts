import { configureStore } from "@reduxjs/toolkit";
import UIConfigReducer from "./UIConfig";
import cartReducer from "./cart";

export const store = configureStore({
  reducer: {
    UIConfig: UIConfigReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
