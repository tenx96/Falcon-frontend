import { ThemeProvider } from "@emotion/react";
import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "routes/Admin";
import "./index.css";
import About, { ROUTE_ABOUT } from "./routes/About";
import Home, { ROUTE_HOME } from "./routes/Home";
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
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            {/* <ApplicationBar title="Falcon Festival" routes={routes} /> */}
            <Navbar title="Falcon Festival" routes={routes} />
            <Switch>
              <Route exact path='/admin' component={Admin} />
              <Route path={ROUTE_ABOUT} component={About} />
              <Route path={ROUTE_LINEUP} component={Lineup} />
              <Route path={ROUTE_TOURISM} component={Tourism} />
              <Route path={ROUTE_HOME} component={Home} />
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}
