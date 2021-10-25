import { Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import "./home.css";

function Day1() {
  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
      <Typography variant="body1" color="text.secondary">
            In laborum occaecat labore quis fugiat adipisicing eu labore cillum
            sint enim ea.
            Occaecat sunt anim aliqua ullamco adipisicing fugiat laborum dolor incididunt.
            </Typography>
      </Grid>
      {[1, 2, 3, 4].map((i) => (
        <Grid key={i} item xs={2}>
          <img
            className="artist-image"
            src={`http://unsplash.it/300/35${i}?random&gravity=center`}
            alt="some random image"
          />
        </Grid>
      ))}
    </Grid>
  );
}



function Day2() {
    return (
      <Grid spacing={1} container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Typography variant="body1" color="text.secondary">
            In laborum occaecat labore quis fugiat adipisicing eu labore cillum
            sint enim ea.
            Dolor deserunt veniam tempor dolore et Lorem veniam cupidatat anim. Sint ipsum ad occaecat ut ea. Ut mollit deserunt laborum enim reprehenderit. Cillum amet elit ad anim. Non laboris in ullamco velit veniam amet consectetur pariatur et labore. Do id officia nisi sint et voluptate ex qui .
            </Typography>
        </Grid>
        {[1, 2, 3].map((i) => (
          <Grid key={i} item xs={3}>
            <img
              className="artist-image"
              src={`http://unsplash.it/300/35${i}?random&gravity=center`}
              alt="image"
            />
          </Grid>
        ))}
      </Grid>
    );
  }

export default function Schedule() {
  const [tab, setTab] = React.useState(0);

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} marginTop="24px">
          {tab == 0 && <Day1></Day1>}
          {tab == 1 && <Day2></Day2>}
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
