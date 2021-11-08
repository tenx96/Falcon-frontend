import {
  Typography,
  Box,
  Icon,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React from "react";
import "./style.css";

const socialIcons = [
  {
    icon: "fab fa-facebook",
    label: "Facebook",
    color: "#3b5998",
    link: "#",
  },
  {
    icon: "fab fa-instagram",
    label: "Instagram",
    color: "#c32aa3",
    link: "#",
  },
  {
    icon: "fab fa-youtube",
    label: "Youtube",
    color: "#C4302B",
    link: "#",
  },
];

function SocialSection() {
  const theme = useTheme();
  const vertical = true;

  return (
    <div>
      <Box mb={3}>
        <Typography
          align={vertical ? "center" : "start"}
          variant="h4"
          fontWeight="bold"
        >
          Follow us to stay updated
        </Typography>
      </Box>

      <div className="container-fluid d-flex justify-content-center align-items-center">
        {socialIcons.map((item, i) => (
          <div
            style={{
              marginRight: "8px"
            }}
            className="d-flex justify-content-center align-items-center"
            key={i}
          >
            <IconButton>
              <Icon
                sx={{
                  color: item.color,
                }}
                className={item.icon}
              ></Icon>
            </IconButton>

            <Typography variant="overline" fontWeight="bold">
              {item.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialSection;
