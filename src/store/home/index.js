import { createSlice, configureStore } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    contact: [],
    schedule: {},
    social: [],
    about: {},
    isLoaded: false,
  },
  reducers: {
    updateHomeData: (state, action) => {

        console.log("Update home data action : " , action)
      const { contact, schedule, social, about } = action.payload;
      state.contact = contact;
      state.schedule = schedule;
      state.social = social;
      state.about = about;
    },
    updateHomeLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { updateHomeData, updateHomeLoaded } = homeSlice.actions;
export default homeSlice.reducer;
