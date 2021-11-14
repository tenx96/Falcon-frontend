import { createSlice, configureStore } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "home",
  initialState: {
    showAlert: false,
    title: "Alert title",
    message: "Alert Message",
    type: "info",
    timeout: 5000,
  },
  reducers: {
    updateShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
    updateAlert: (state, action) => {
      const { title, message, type, timeout } = action.payload;

      
      state.title = title ? title : state.title;
      state.message = message ? message : state.message;
      state.type = type ? type : state.type;
      state.timeout = timeout ? timeout : state.timeout;
      state.showAlert = true;
    },
  },
});

export const { updateShowAlert, updateAlert } = alertSlice.actions;
export default alertSlice.reducer;
