import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home";
import artistReducer from "./artists";
import alertReducer from "./alert";
import announcementReducer from "./announcement";
import sponsorReducer from "./sponsor";
export default configureStore({
  reducer: {
    home: homeReducer,
    artist: artistReducer,
    alert: alertReducer,
    announcement: announcementReducer,
    sponsor: sponsorReducer,
  },
});
