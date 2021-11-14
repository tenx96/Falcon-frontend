import {
  createAnnouncementData,
  deleteAnnouncementData,
  updateAnnouncementData,
} from "api/announcementApi";
import { useAnnouncementReload } from "customHooks/data/useAnnouncementReload";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DefaultDashboard from "../DefaultDashboard/DefaultDashboard";
import createSchema from "./createSchema.json";
import updateSchema from "./updateSchema.json";

export const ROUTE_ADMIN_ANNOUNCEMENTS = "/admin/announcements";
function AnnouncementAdmin() {
  const [reload, setReload] = useState(false);

  const data = useSelector((state) => state.announcement);

  const performReload = () => {
    setReload(!reload);
  };

  useAnnouncementReload([reload]);

  return (
    <div>
      <DefaultDashboard
        name="Announcement"
        data={data.announcements}
        isLoaded={data.isLoaded}
        updateApi={updateAnnouncementData}
        createApi={createAnnouncementData}
        deleteApi={deleteAnnouncementData}
        performReload={performReload}
        createSchema={createSchema}
        updateSchema={updateSchema}
      />
    </div>
  );
}

export default AnnouncementAdmin;
