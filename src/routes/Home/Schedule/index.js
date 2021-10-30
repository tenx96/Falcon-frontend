import { Title } from "@mui/icons-material";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandableTypography from "components/ExpandableTypography";
import * as React from "react";
import "../home.css";
import MobileImageSlider from "./MobileSchedule";

import mockData from "./mockData.json";

const parseData = (data) => {
  return { ...data, images: data.images.map((item) => item.imgPath) };
};

function DesktopSchedule({
  description,
  images,
  title = "The show begins",
  threeTiles = false,
}) {
  const maxImages = threeTiles ? 3 : 4;

  const slicedImages = images.slice(0, maxImages);

  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid item xs={threeTiles ? 3 : 4}>
        <Typography
          sx={{
            mb: 3,
          }}
          fontWeight="bold"
          variant="h4"
          color="text.secondary"
        >
          {title}
        </Typography>
        <ExpandableTypography
          maxLines={8}
          extreme={12}
          variant="subtitle1"
          color="text.secondary"
        >
          {description}
        </ExpandableTypography>
      </Grid>
      {slicedImages.map((image, i) => (
        <Grid key={i} item xs={threeTiles ? 3 : 2}>
          <img className="artist-image" src={image} alt="some random image" />
        </Grid>
      ))}
    </Grid>
  );
}

function MobileView({ title, description, images }) {
  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Typography
          sx={{
            mb: 3,
          }}
          fontWeight="bold"
          variant="h4"
          color="text.secondary"
        >
          {title}
        </Typography>
        <ExpandableTypography
          maxLines={6}
          extreme={11}
          variant="body1"
          color="text.secondary"
        >
          {description}
        </ExpandableTypography>
      </Grid>

      <Grid item xs={8}>
        <MobileImageSlider images={images} />
      </Grid>
    </Grid>
  );
}

export default function Schedule({}) {
  const [tab, setTab] = React.useState(0);

  const theme = useTheme();
  const mdAndUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} marginTop="24px">
          {tab == 0 && mdAndUp && (
            <DesktopSchedule {...parseData(mockData.day1)} />
          )}
          {tab == 0 && !mdAndUp && <MobileView {...parseData(mockData.day1)} />}
          {tab == 1 && mdAndUp && (
            <DesktopSchedule {...parseData(mockData.day2)} />
          )}
          {tab == 1 && !mdAndUp && <MobileView {...parseData(mockData.day2)} />}
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
