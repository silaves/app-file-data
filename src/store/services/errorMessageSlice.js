import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  title: "OOPS!",
  msg: "Ocurrio un problema"
}

export const messageErrorSlice = createSlice({
  name: "modalError",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.show = true;
      state.title = action.payload.title;
      state.msg = action.payload.msg;
    },
    hideMessage: (state, action) => {
      state.show = false;
    },
  }
});

export const { showMessage, hideMessage } = messageErrorSlice.actions;
export default messageErrorSlice.reducer;