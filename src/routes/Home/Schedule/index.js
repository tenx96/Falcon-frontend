import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import "../home.css";
import MobileImageSlider from "./MobileSchedule";

const imagesDay1 = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const imagesDay2 = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "http://unsplash.it/300/355?random&gravity=center",
  },
  {
    label: "Bird",
    imgPath: "http://unsplash.it/300/351?random&gravity=center",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "http://unsplash.it/300/352?random&gravity=center",
  },
];

const day1Data = {
  description:
    "Lorem Lorem ad occaecat commodo eiusmod Lorem incididunt voluptate ad minim. Deserunt duis incididunt laboris magna et sit qui in duis pariatur voluptate velit. Adipisicing magna quis officia id irure nulla laborum aliquip.",
  images: imagesDay1.map((img) => img.imgPath),
};

const day2Data = {
  description:
    "Aaboris magna et sit qui in duis pariatur voluptate velit. Adipisicing magna quis officia id irure nulla laborum aliquip.",
  images: imagesDay2.map((img) => img.imgPath),
};

function Day1({ description, images }) {
  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Grid>
      {images.map((image, i) => (
        <Grid key={i} item xs={2}>
          <img className="artist-image" src={image} alt="some random image" />
        </Grid>
      ))}
    </Grid>
  );
}

function Day2({ description, images }) {
  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid item xs={3}>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Grid>
      {images.map((image, i) => (
        <Grid key={i} item xs={3}>
          <img className="artist-image" src={image} alt="some image" />
        </Grid>
      ))}
    </Grid>
  );
}

function MobileView({ description, images }) {
  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <MobileImageSlider images={images} />
      </Grid>
    </Grid>
  );
}

export default function Schedule({}) {
  const [tab, setTab] = React.useState(0);

  const theme = useTheme()
  const mdAndUp = useMediaQuery(theme.breakpoints.up("md"))


  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} marginTop="24px">
          {(tab == 0 && mdAndUp) && <Day1 {...day1Data} />}
          {(tab == 0 && !mdAndUp) && <MobileView {...day1Data} />}
          {(tab == 1 && mdAndUp) && <Day2 {...day2Data} />}
          {(tab == 1 && !mdAndUp) && <MobileView {...day2Data} />}
        </Grid>
        <Grid
          item
          xs={12}
          container
          marginTop="24px"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            sx={{
              mx: 4,
            }}
            onClick={() => {
              setTab(0);
            }}
            variant={tab === 0 ? "contained" : "outlined"}
          >
            Day 1
          </Button>
          <Button
            onClick={() => {
              setTab(1);
            }}
            variant={tab === 1 ? "contained" : "outlined"}
          >
            Day 2
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
