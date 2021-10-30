import { Typography } from "@mui/material";
import React, {useState} from "react";
import "./style.css";
function ExpandableTypography(props) {
  const { maxLines , extreme } = props;
  const [expanded, setexpanded] = useState(false);

  return (
    <div
      onClick={() => {
        setexpanded(!expanded);
      }}
      style={{
        display: "contents",
      }}
    >
      <Typography
        style={{
          WebkitLineClamp: !expanded ? maxLines : extreme,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          cursor : "pointer"
        }}
        {...props}
      ></Typography>
    </div>
  );
}

export default ExpandableTypography;

// .truncate-lines {
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 5; /* number of lines to show */
//     -webkit-box-orient: vertical;
//   }
