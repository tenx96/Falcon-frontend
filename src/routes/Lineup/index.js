import React from "react";
import Artist from "./Artists";
import Event, { COLOR_LIST } from "./Events";
import "./style.css";
import { Grid } from "@mui/material";

import { artistList, secondaryArtists } from "data/artists";
import { eventList } from "data/events";
import { useApi } from "customHooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { updateArtists } from "store/artists";
import { updateHomeLoaded } from "store/home";
import { updateArtistsLoaded } from "store/artists";
import { getArtists } from "api/artistsApi";
import PageLoader from "components/loaders/PageLoader";
export const ROUTE_LINEUP = "/lineup";

export default function Lineup() {
  const getEventColor = (index) => {
    if (index % 4 === 0) {
      return COLOR_LIST[3];
    }

    if (index % 3 === 0) {
      return COLOR_LIST[2];
    }

    if (index % 2 === 0) {
      return COLOR_LIST[1];
    }
    return COLOR_LIST[0];
  };

  const dispatch = useDispatch();

  const artistData = useSelector((state) => state.artist);

  return artistData.isLoaded ? (
    <div className="lineup" style={{ backgroundColor: "#121212" }}>
      <Grid justifyContent="center" container spacing={4}>
        {artistData.mainArtists.map((item, i) => (
          <Grid item lg={3} md={4} xs={12}>
            <Artist artist={item} key={i} />
          </Grid>
        ))}
        <Grid item xs={12}></Grid>
        {artistData.secondaryArtists.map((item, i) => (
          <Grid item md={6} lg={4} xs={12}>
            <Artist artist={item} key={i} />
          </Grid>
        ))}
      </Grid>
      <section className="dark">
        <div className="container pt-5 pb-3">
          {eventList.map((item, i) => (
            <Event key={i} color={getEventColor(i)} event={item} />
          ))}
        </div>
      </section>
    </div>
  ) : (
    <PageLoader />
  );
}
