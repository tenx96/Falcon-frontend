import { ThemeProvider } from "@emotion/react";
import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import About, { ROUTE_ABOUT } from "./routes/About";
import Home, { ROUTE_HOME } from "./routes/Home";
import Lineup, { ROUTE_LINEUP } from "./routes/Lineup";
import Tourism, { ROUTE_TOURISM } from "./routes/Tourism";
import { CssBaseline } from "@mui/material";
import Hotels , { ROUTE_HOTELS } from "./routes/Hotels";
import Food , { ROUTE_FOOD } from "./routes/Food";
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
      background : {
        main : "#121212",
        paper : "#181818",
        hover : "#282828"
      }
    },
  });

  return (
    <React.StrictMode>
      
        <Router>
          <div>
            {/* <ApplicationBar title="Falcon Festival" routes={routes} /> */}
            <Navbar title="Falcon Festival" routes={routes} />
            <ThemeProvider theme={theme}>
              <CssBaseline/>
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
