import "./footer.css";

import React from "react";
import { Box, Icon, Typography } from "@mui/material";

const socialIcons = [
  {
    icon: "fab fa-facebook",
    label: "Facebook",
    link: "#",
  },
  {
    icon: "fab fa-instagram",
    label: "Instagram",
    link: "#",
  },
  {
    icon: "fas fa-envelope",
    label: "Email",
    link: "#",
  },
];

function FooterSocial() {
  return (
    <Box>
      <Box>
        <Typography color="white" textAlign="center" variant="h5" gutterBottom component="div">
          Follow us
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        {socialIcons.map((item, index) => (
          <Box key={index} ml={3}>
            <Icon
              sx={{
                color: "white",
              }}
              className={item.icon}
            ></Icon>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FooterSocial;
