import { Icon, Typography } from "@mui/material";
import React from "react";
import "./style.css";

export const COLOR_LIST = ["blue", "red", "green", "yellow"];

function Events({ event, color = "blue" }) {
  return (
    <article className={"postcard dark " + color}>
      <span className="postcard__img_link">
        <img className="postcard__img" src={event.image} alt="event pic" />
      </span>
      <div className="postcard__text">
        <Typography variant="h1" className={"postcard__title " + color}>
          {event.title}
        </Typography>
        <div className="postcard__subtitle small">
          <Typography
            variant="caption"
            dateTime="2020-05-25 12:00:00"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Icon className="fas fa-calendar-alt me-2" />
            {event.subtitle}
          </Typography>
        </div>
        <div className="postcard__bar"></div>
        {event.desc && (
          <Typography variant="subtitle2" className="postcard__preview-txt">
            {event.desc}
          </Typography>
        )}
        {event.time && (
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <Icon className="fas fa-clock me-2" />
              {event.time}
            </li>
          </ul>
        )}
      </div>
    </article>
  );
}

export default Events;
