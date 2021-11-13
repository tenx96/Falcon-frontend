import "./footer.css";

import React from "react";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
function FooterSocial() {
  const social = useSelector((state) => state.home.social);
  const isLoaded = useSelector((state) => state.home.isLoaded);

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
        {social.map((item, index) => (
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
