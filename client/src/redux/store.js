import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice.js";

export default configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
