import { createSlice, configureStore } from "@reduxjs/toolkit";

const announcementSlice = createSlice({
  name: "announcement",
  initialState: {
    announcements: [],
    isLoaded: false,
  },
  reducers: {
    updateAnnouncements: (state, action) => {
      state.announcements = action.payload;

      state.isLoaded = true;
    },
    updateAnnouncementsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { updateAnnouncements, updateAnnouncementsLoaded } =
  announcementSlice.actions;
export default announcementSlice.reducer;
