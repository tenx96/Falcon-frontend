import { getAnnouncements } from "api/announcementApi";
import { getArtists } from "api/artistsApi";
import React from "react";
import { useDispatch } from "react-redux";
import { updateAnnouncements } from "store/announcement";
import { updateAnnouncementsLoaded } from "store/announcement";

export const useAnnouncementReload = (prop = [], cancel = false) => {
  const dispatch = useDispatch();
  prop = Array.isArray(prop) ? prop : [prop];
  React.useEffect(() => {
    console.log("Reloading announcements");

    function fetchData() {
      dispatch(updateAnnouncementsLoaded(false));
      getAnnouncements()
        .then((response) => {
          const data = response.data;
          if (response.status < 300) {
            dispatch(updateAnnouncements(data.announcements));
            dispatch(updateAnnouncementsLoaded(true));
          } else {
            dispatch(updateAnnouncementsLoaded(false));
          }
        })
        .catch((err) => {
          dispatch(updateAnnouncementsLoaded(false));
        });
    }

    if (!cancel) {
      fetchData();
    }
  }, prop);
};
