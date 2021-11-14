import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { getHomeDetails } from "api/home";
import AdminRoute from "components/AdminRoute";
import CustomAlert from "components/Alert/CustomAlert";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useArtistReload } from "customHooks/data/useArtistReload";
import { useApi } from "customHooks/useApi";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminHome, { ROUTE_ADMIN_HOME } from "routes/admin/home";
import { updateShowAlert } from "store/alert";
import { updateHomeData, updateHomeLoaded } from "store/home";
import "./index.css";
import About, { ROUTE_ABOUT } from "./routes/About";
import AdminLogin, { ROUTE_ADMIN_LOGIN } from "./routes/admin/login";
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
  const alert = useSelector((state) => state.alert);
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

  useArtistReload([], artist.isLoaded);

  return (
    <React.StrictMode>
      <Router>
        <div className="content-wrapper">
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
              <Route path={ROUTE_ADMIN_LOGIN} component={AdminLogin} />
              <AdminRoute path={ROUTE_ADMIN_HOME} component={AdminHome} />
              <Route exact path={ROUTE_HOME} component={Home} />
            </Switch>
          </ThemeProvider>
          <Footer></Footer>

          {alert.showAlert && (
            <div className="notification-wrapper">
              <CustomAlert
                title={alert.title}
                message={alert.message}
                type={alert.type}
                timeout={alert.timeout}
                onClose={() => {
                  dispatch(updateShowAlert(false));
                }}
              />
            </div>
          )}
        </div>
      </Router>
    </React.StrictMode>
  );
}
