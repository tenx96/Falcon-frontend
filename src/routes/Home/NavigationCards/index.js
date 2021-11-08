import {
  Button,
  Typography,
  Box,
  Collapse,
  Card,
  Slide,
  Container,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Icon,
  CardActionArea,
} from "@mui/material";
import useColor from "customHooks/useColor";
import React, { useState } from "react";
import "./style.css";

function NavigationCards({ title, image, subTitle }) {
  const colors = useColor();

  return (
    <Container
      className="nav-card-container"
      sx={{
        padding: "40px",
        bgcolor: colors.background.paper,
        "&:hover": {
          bgcolor: colors.background.main,
        },
      }}
      maxWidth="xs"
    >
      <Card
        sx={{
          bgcolor: colors.background.main,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="nav-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default NavigationCards;
