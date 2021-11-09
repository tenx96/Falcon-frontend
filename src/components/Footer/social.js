import "./footer.css";

import React from "react";
import { Box, Icon, IconButton, Typography } from "@mui/material";

import { socialList } from "data/social";

function FooterSocial() {
  return (
    <Box>
      <Box>
        <Typography
          color="white"
          textAlign="center"
          variant="h5"
          gutterBottom
          component="div"
        >
          Follow us
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        {socialList.map((item, index) => (
          <Box key={index} ml={3}>
            <IconButton
              onClick={() => {
                window.open(item.link, "_target");
              }}
            >
              <Icon
                sx={{
                  color: "white",
                }}
                className={item.icon}
              ></Icon>
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FooterSocial;
