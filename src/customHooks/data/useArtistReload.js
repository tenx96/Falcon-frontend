import { getArtists } from "api/artistsApi";
import React from "react";
import { useDispatch } from "react-redux";
import { updateArtistsLoaded } from "store/artists";
import { updateArtists } from "store/artists";

export const useArtistReload = (prop = [], cancel = false) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("Reloading artists");

    function fetchData() {
      dispatch(updateArtistsLoaded(false));
      getArtists()
        .then((response) => {
          const data = response.data;

          if (response.status < 300) {
            dispatch(updateArtists(data.artists));
            dispatch(updateArtistsLoaded(true));
          } else {
            dispatch(updateArtistsLoaded(false));
          }
        })
        .catch((err) => {
          dispatch(updateArtistsLoaded(false));
        });
    }

    if (!cancel) {
      fetchData();
    }
  }, prop);
};
