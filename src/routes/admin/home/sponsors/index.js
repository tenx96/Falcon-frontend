import { deleteSponsorData } from "api/sponsorApi";
import { createSponsorData } from "api/sponsorApi";
import { updateSponsorData } from "api/sponsorApi";
import { useSponsorsReload } from "customHooks/data/useSponsorReload";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DefaultDashboard from "../DefaultDashboard/DefaultDashboard";
import createSchema from "./createSchema.json";
import updateSchema from "./updateSchema.json";

export const ROUTE_ADMIN_SPONSORS = "/admin/sponsor";
function SponsorAdmin() {
  const [reload, setReload] = useState(false);

  const sponsorData = useSelector((state) => state.sponsor);

  const performReload = () => {
    setReload(!reload);
  };

  useSponsorsReload([reload]);

  return (
    <div>
      <DefaultDashboard
        name="Sponsor"
        data={sponsorData.sponsors}
        isLoaded={sponsorData.isLoaded}
        updateApi={updateSponsorData}
        createApi={createSponsorData}
        deleteApi={deleteSponsorData}
        performReload={performReload}
        createSchema={createSchema}
        updateSchema={updateSchema}
      />
    </div>
  );
}

export default SponsorAdmin;
