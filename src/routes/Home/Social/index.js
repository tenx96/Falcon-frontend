import { Typography, Box, Icon, useTheme, useMediaQuery } from "@mui/material";
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
    icon: "fab fa-twitter",
    label: "Twitter",
    color: "#1da1f2",
    link: "#",
  },
];

function SocialSection() {
  const theme = useTheme();
  const smAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Follow us to stay updated
        </Typography>
      </Box>

      <Box display={smAndDown && "flex"} justifyContent="center">
        {socialIcons.map((item, i) => (
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            key={i}
            mr={(smAndDown &&  i <socialIcons.length-1) && 3}
          >
            <Icon
              
              sx={{
                mr: smAndDown ? 1 : 3,
                color: item.color
              }}
              className={item.icon}
            ></Icon>

            <Typography variant="overline" fontWeight="bold">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SocialSection;
