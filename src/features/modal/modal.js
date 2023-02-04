import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  id: null,
  isVisible: false,
  itm: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.id = payload.id.toString();
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.id = null;
    },
    openAnotherOne: (state, { payload }) => {
      state.isVisible = true;
      state.itm = payload.itm.toString();
    },
    closeAnotherOne: (state, action) => {
      state.isVisible = false;
      state.itm = null;
    },
  },
});

export const { openModal, closeModal, openAnotherOne, closeAnotherOne } =
  modalSlice.actions;

export default modalSlice.reducer;
