import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router";
import ArtistAdmin, { ROUTE_ADMIN_ARTIST } from "./artists";
import ScheduleAdmin, { ROUTE_ADMIN_SCHEDULE } from "./schedule";
import SponsorAdmin, { ROUTE_ADMIN_SPONSORS } from "./sponsors";
import "./style.css";

const drawerWidth = 240;

export const ROUTE_ADMIN_HOME = "/admin";

function AdminDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navRoutes = [
    {
      label: "Artist",
      route: ROUTE_ADMIN_ARTIST,
    },
    {
      label: "Sponsor",
      route: ROUTE_ADMIN_SPONSORS,
    },
    {
      label: "Schedule",
      route: ROUTE_ADMIN_SCHEDULE,
    },
  ];
  const history = useHistory();
  const [headerTitle, setheaderTitle] = useState("Artist Admin");

  useEffect(() => {
    setheaderTitle("Artist Admin");
    history.push(ROUTE_ADMIN_ARTIST);
  }, []);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navRoutes.map((item, index) => (
          <ListItem
            onClick={() => {
              setheaderTitle(`${item.label} Admin`);
              history.push(item.route);
            }}
            button
            key={index}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {headerTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Route path={ROUTE_ADMIN_ARTIST} component={ArtistAdmin} />
        <Route path={ROUTE_ADMIN_SCHEDULE} component={ScheduleAdmin} />
        <Route path={ROUTE_ADMIN_SPONSORS} component={SponsorAdmin} />
      </Box>
    </Box>
  );
}

export default AdminDashboard;
