import React from "react";
import DayComponent from "./DayComponent";

export const ROUTE_ADMIN_SCHEDULE = "/admin/schedule";
function ScheduleAdmin() {
  return (
    <div>
      <h2>This is schedule admin</h2>
      <DayComponent title="Day 1" maxImages={3} />
      <DayComponent title="Day 2" maxImages={4} />
    </div>
  );
}

export default ScheduleAdmin;
