import { createSlice, configureStore } from "@reduxjs/toolkit";

const artistSlice = createSlice({
  name: "home",
  initialState: {
    artists: [],

    mainArtists: [],
    secondaryArtists: [],
    isLoaded: false,
  },
  reducers: {
    updateArtists: (state, action) => {
      const data = action.payload;
      state.artists = data;

      state.mainArtists = data.filter((item) => item.type == "MAIN");

      state.secondaryArtists = data.filter((item) => item.type != "MAIN");

      state.isLoaded = true;
    },
    updateArtistsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { updateArtists, updateArtistsLoaded } = artistSlice.actions;
export default artistSlice.reducer;
