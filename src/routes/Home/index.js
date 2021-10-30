import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArtistCard from "components/ArtistCard";
import BannerImage from "components/Banner";
import React from "react";
import GalleryImages from "./Gallery";
import "./home.css";
import NavigationCards from "./NavigationCards";
import PosterCard from "./PosterCard";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";
import TicketCard from "./TicketCard";
import VipCard from "./VipCard";
import poster1 from "assets/poster-1.jpg";
import poster2 from "assets/poster-2.jpg";
import poster3 from "assets/poster-3.jpg";
import poster4 from "assets/poster-4.jpg";
import PosterSlider from "./PosterCard";
import SocialSection from "./Social";
import AboutFalcon from "./About";

const posters = [poster1, poster2, poster3, poster4];

export const ROUTE_HOME = "/";

export default function Home() {
  const theme = useTheme();
  const smAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const lgAndUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div style={{ width: "100%", height: "100%" }}>
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
                  <TicketCard
                    title="Book your tickets"
                    image="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/21/w900X450/logo-on-gray.jpg?w=400&dpr=2.6"
                  />
                </Grid>
              </Grid>
              <Grid mt={8} item mx={3} item xs={12} sm={10} md={8}>
                <Schedule></Schedule>
              </Grid>

              <Grid mt={8} item container md={12} xs={12}>
                <Grid mb={6} xs={12}>
                  <Typography
                    align="center"
                    fontWeight="bold"
                    variant="h4"
                    component="div"
                  >
                    News and Announcements
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <PosterSlider images={posters} />
                </Grid>
                <Grid my="auto" px={3} item xs={12} md={4}>
                  <SocialSection />
                </Grid>
              </Grid>

              <Grid mt={20} item xs={12}>
                <VipCard
                  title="Message from PM"
                  image="data:image/jpeg;base64,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"
                  description="Incididunt labore pariatur nostrud officia eu magna in fugiat quis incididunt enim nisi esse aliqua. Sit magna voluptate voluptate proident culpa culpa consectetur incididunt do cillum magna ad sunt do. Cupidatat excepteur culpa elit proident qui tempor duis eiusmod ullamco nisi consequat reprehenderit proident enim. Et id enim proident voluptate eu nulla voluptate anim veniam do excepteur anim. Minim aliqua dolore eiusmod aliqua nisi eiusmod laboris ullamco anim qui sit mollit. Qui sint velit voluptate consectetur qui eiusmod tempor fugiat non cupidatat."
                />
              </Grid>

              <Grid
                mt={10}
                spacing={4}
                xs={12}
                justifyContent="center"
                alignItems="center"
                container
                item
              >
                <Grid item xs={12}>
                  <Typography
                    align="center"
                    fontWeight="bold"
                    variant="h4"
                    component="div"
                  >
                    Plan your Visit
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <NavigationCards
                    image="https://landtravelblog.files.wordpress.com/2013/08/p1080649.jpg?w=280&h=280&crop=1"
                    title="Tourism"
                    subTitle="Dolor duis irure sunt non culpa velit labore consectetur fugiat reprehenderit laborum voluptate."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <NavigationCards
                    image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izeD0hHEwWUc/v0/1000x-1.jpg"
                    title="Hotels"
                    subTitle="Sunt quis in do eiusmod eu officia occaecat nisi aute amet consectetur do."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <NavigationCards
                    image="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"
                    title="Food"
                    subTitle="Nisi ipsum sint nulla occaecat non commodo nostrud aliquip esse consequat cillum minim elit eu."
                  />
                </Grid>
              </Grid>



              <Grid mx={4} mt={10} item xs={12}>
                <GalleryImages />
              </Grid>

              <Grid mt={10} item xs={12} md={6} lg={8}>
                <AboutFalcon title="About Falcon Festival" description="Cupidatat duis Lorem dolor ullamco ipsum nostrud velit enim esse tempor anim sunt. Aliqua dolore velit pariatur velit deserunt consectetur. Veniam culpa nostrud ipsum elit duis culpa veniam culpa proident. Fugiat esse enim est consequat laborum ex consequat id. Sunt cupidatat tempor ex cupidatat magna sunt veniam nisi elit consectetur "/>
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
