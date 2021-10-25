import { Container, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import ArtistCard from "components/ArtistCard";
import BannerImage from "components/Banner";
import DetailCard from "components/DetailCard";
import Footer from "components/Footer";
import React from "react";
import "./home.css";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";
export const ROUTE_HOME = "/";

export default function Home() {
  const theme = useTheme();
  const smAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const lgAndUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div style={{ width: "100%", height: "100%"}}>
      <BannerImage />
      <div className="home-container">
        <Container
          sx={{
            marginTop: lgAndUp ? "-22rem" : smAndUp ? "-16rem" : "-8rem",
          }}
          className={`home-container-content`}
          maxWidth="xl"
        >
          <Paper
            elevation={4}
            sx={{ bgcolor: "#FAFAFA", height: "100%", pb: 5 }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} md={7}>
                <ArtistCard
                  title={"The local train"}
                  description={
                    "Sint esse ullamco eu non laborum veniam. Sint do adipisicing deserunt ad duis in ut sint incididunt. Dolore nulla sunt tempor cupidatat incididunt excepteur cupidatat sit non reprehenderit minim adipisicing cillum adipisicing. Culpa ad excepteur sit velit."
                  }
                  image={
                    "https://cdn.shopify.com/s/files/1/2381/0737/files/tlt4_large.jpg?v=1529751537"
                  }
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Grid container justifyContent="center" alignItems="center">
                  <DetailCard
                    title="Lorem"
                    description="Anim commodo dolore exercitation voluptate eu ut labore enim eiusmod excepteur incididunt magna culpa non."
                    image="http://placekitten.com/300"
                  />
                </Grid>
              </Grid>
              <Grid mx={3} item xs={12} sm={10} md={8}>
                <Schedule></Schedule>
              </Grid>

              <Grid item xs={12}>
                <Sponsors />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </div>
  );
}
