import {
  Box,
  ImageListItem,
  ImageList,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ResponsiveEmbed from 'react-responsive-embed'
import * as React from "react";
import "./style.css";

import prev1 from "assets/prev-1.jpg";
import prev2 from "assets/prev-2.jpg";
import prev3 from "assets/prev-3.jpg";
import prev4 from "assets/prev-4.jpeg";
import prev5 from "assets/prev-5.jpeg";
import prev6 from "assets/prev-6.jpeg";

export default function GalleryImages(title = "Shots from last year", images) {
  
    const theme = useTheme()
    const isMdAndDown = useMediaQuery(theme.breakpoints.down("md"))
  
  
    return (
    <Box>
      <Typography align="center" fontWeight="bold" variant="h3">
        Shots from Last year
      </Typography>

      <Box my={4}>
        <div className="sm-embed">
          <ResponsiveEmbed src='https://www.youtube.com/embed/m-DBuO7Uf6w' allowfullscreen />
        </div>
        <iframe
          className="embed-video bg-embed"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/m-DBuO7Uf6w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>

      <Box mt={4}>
        <ImageList variant="woven"  cols={isMdAndDown ? 2 : 3} gap={8}>
          {itemData.slice(0, 6).map((item) => (
            <ImageListItem key={item.img}>
              <img
                className="woven-image"
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          sx={{
            borderRadius: "100px",
            margin: "0 auto",
          }}
          variant="text"
        >
          See More
        </Button>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: prev1,
    title: "Bed",
  },
  {
    img: prev2,
    title: "Bed",
  },
  {
    img: prev3,
    title: "Bed",
  },
  {
    img: prev4,
    title: "Bed",
  },
  {
    img: prev5,
    title: "Bed",
  },
  {
    img: prev6,
    title: "Bed",
  },
];
