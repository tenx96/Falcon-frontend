import { createSlice, configureStore } from "@reduxjs/toolkit";

const sponsorSlice = createSlice({
  name: "sponsors",
  initialState: {
    sponsors: [],
    isLoaded: false,
  },
  reducers: {
    updateSponsors: (state, action) => {
      state.sponsors = action.payload;

      state.isLoaded = true;
    },
    updateSponsorsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { updateSponsors, updateSponsorsLoaded } = sponsorSlice.actions;
export default sponsorSlice.reducer;
