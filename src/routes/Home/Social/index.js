import {
  Typography,
  Box,
  Icon,
  useTheme,
  useMediaQuery,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import "./style.css";
import { socialList } from "data/social";

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
        {socialList.map((item, i) => (
          <div
            style={{
              marginRight: "8px",
            }}
            className="d-flex justify-content-center align-items-center"
            key={i}
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={() => {
                window.open(item.link, "_target");
              }}
              startIcon={
                <Icon
                  sx={{
                    color: item.color,
                  }}
                  className={item.icon}
                ></Icon>
              }
            >
              <span
                style={{
                  color: "#000000",
                }}
              >
                {item.label}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialSection;
