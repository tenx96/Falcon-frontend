import React from "react";
import "./sponsors.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SponsorCard({image}) {
  return (
    <div>
      <LazyLoadImage src={image} effect="blur" className="sponsor-card" />
    </div>
  );
}

export default SponsorCard;
