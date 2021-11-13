import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { getArtists } from "api/artistsApi";
import { getHomeDetails } from "api/home";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useApi } from "customHooks/useApi";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { updateArtists } from "store/artists";
import { updateArtistsLoaded } from "store/artists";
import { updateHomeData, updateHomeLoaded } from "store/home";
import "./index.css";
import About, { ROUTE_ABOUT } from "./routes/About";
import Food, { ROUTE_FOOD } from "./routes/Food";
import Home, { ROUTE_HOME } from "./routes/Home";
import Hotels, { ROUTE_HOTELS } from "./routes/Hotels";
import Lineup, { ROUTE_LINEUP } from "./routes/Lineup";
import Tourism, { ROUTE_TOURISM } from "./routes/Tourism";

export const ApplicationContext = React.createContext();
export default function App() {
  const routes = [
    {
      label: "Home",
      route: ROUTE_HOME,
    },
    {
      label: "About",
      route: ROUTE_ABOUT,
    },
    {
      label: "Lineup",
      route: ROUTE_LINEUP,
    },
    {
      label: "Tourism",
      route: ROUTE_TOURISM,
    },
  ];

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        main: "#121212",
        paper: "#181818",
        hover: "#282828",
      },
    },
  });

  const isLoaded = useSelector((state) => state.home.isLoaded);
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist);
  useApi(
    getHomeDetails,
    (data) => {
      // success
      console.log("successfully fetched data , ", data);
      dispatch(updateHomeData(data));
      dispatch(updateHomeLoaded(true));
    },
    () => {
      dispatch(updateHomeLoaded(false));
    },
    isLoaded
  );

  useApi(
    getArtists,
    (data) => {
      dispatch(updateArtists(data.artists));
      dispatch(updateArtistsLoaded(true));
    },
    () => {
      dispatch(updateArtistsLoaded(false));
    },
    artist.isLoaded
  );

  return (
    <React.StrictMode>
      <Router>
        <div>
          {/* <ApplicationBar title="Falcon Festival" routes={routes} /> */}
          <Navbar title="Falcon Festival" routes={routes} />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
              <Route path={ROUTE_ABOUT} component={About} />
              <Route path={ROUTE_LINEUP} component={Lineup} />
              <Route path={ROUTE_TOURISM} component={Tourism} />
              <Route path={ROUTE_HOTELS} component={Hotels} />
              <Route path={ROUTE_FOOD} component={Food} />
              <Route path={ROUTE_HOME} component={Home} />
            </Switch>
          </ThemeProvider>
          <Footer></Footer>
        </div>
      </Router>
    </React.StrictMode>
  );
}
