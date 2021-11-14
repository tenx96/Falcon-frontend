import {
  createArtistData,
  deleteArtistData,
  updateArtistData,
} from "api/artistsApi";
import { useArtistReload } from "customHooks/data/useArtistReload";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DefaultDashboard from "../DefaultDashboard/DefaultDashboard";
import createSchema from "./createSchema.json";
import updateSchema from "./updateSchema.json";

export const ROUTE_ADMIN_ARTIST = "/admin/artist";
function ArtistAdmin() {
  const [reload, setReload] = useState(false);

  const artistData = useSelector((state) => state.artist);

  const performReload = () => {
    setReload(!reload);
  };

  useArtistReload([reload]);

  return (
    <div>
      <DefaultDashboard
        name="Artist"
        data={artistData.artists}
        isLoaded={artistData.isLoaded}
        updateApi={updateArtistData}
        createApi={createArtistData}
        deleteApi={deleteArtistData}
        performReload={performReload}
        createSchema={createSchema}
        updateSchema={updateSchema}
      />
    </div>
  );
}

export default ArtistAdmin;
