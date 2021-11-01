import React from "react";
import { Typography } from "@mui/material";
import "./style.css";

function Artists({ artist }) {
  return (
    <div className="px-0 artist">
        <div className="card p-5">
          <div className="cover">
            <img src={artist.image} alt="cover" />
          </div>
          <div className="card-content">
            <Typography variant="h5">{artist.name}</Typography>
            <Typography variant="subtitle2 m-0" component="p" gutterBottom>
              {artist.desc}
            </Typography>
          </div>
        </div>
    </div>
  );
}

export default Artists;
