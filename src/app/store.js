import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authslice";
import devoteeReducer from "../features/devotee/devoteeSlice";
import ModalReducer from "../features/modal/modal";
import userReducer from "../features/Users/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    devotees: devoteeReducer,
    modal: ModalReducer,
    user: userReducer,
  },
});
