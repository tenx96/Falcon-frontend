import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApplicationBar from "./components/ApplicationBar";
import About, { ROUTE_ABOUT } from "./routes/About";
import Home, { ROUTE_HOME } from "./routes/Home";
import Lineup, { ROUTE_LINEUP } from "./routes/Lineup";
import Tourism, { ROUTE_TOURISM } from "./routes/Tourism";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

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
            <ApplicationBar title="Falcon Festival" routes={routes} />
            <Switch>
              <Route path={ROUTE_ABOUT} component={About} />
              <Route path={ROUTE_LINEUP} component={Lineup} />
              <Route path={ROUTE_TOURISM} component={Tourism} />
              <Route path={ROUTE_HOME} component={Home} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}
