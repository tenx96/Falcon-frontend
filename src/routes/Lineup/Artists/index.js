import React from "react";
import { Typography } from "@mui/material";
import "./style.css";

function Artists({ artist }) {
  return (
    <div className="px-0 artist">
      <div className="card p-5">
        <div className="cover">
          {artist.images && artist.images.length > 0 && (
            <img src={artist.images[0].imageUrl} alt="cover" />
          )}
        </div>
        <div className="card-content">
          <Typography variant="h5">{artist.title}</Typography>
          <Typography variant="subtitle2 m-0" component="p" gutterBottom>
            {artist.subtitle}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Artists;
