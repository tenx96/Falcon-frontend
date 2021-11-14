import { getSponsor } from "api/sponsorApi";
import React from "react";
import { useDispatch } from "react-redux";
import { updateSponsorsLoaded, updateSponsors } from "store/sponsor";

export const useSponsorsReload = (prop = [], cancel = false) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("Reloading sponsors");

    function fetchData() {
      dispatch(updateSponsorsLoaded(false));
      getSponsor()
        .then((response) => {
          const data = response.data;

          if (response.status < 300) {
            dispatch(updateSponsors(data.sponsors));
            dispatch(updateSponsorsLoaded(true));
          } else {
            dispatch(updateSponsorsLoaded(false));
          }
        })
        .catch((err) => {
          dispatch(updateSponsorsLoaded(false));
        });
    }

    if (!cancel) {
      fetchData();
    }
  }, prop);
};
