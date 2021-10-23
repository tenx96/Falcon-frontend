import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useHistory } from "react-router";

export default function ApplicationBar({ title, routes }) {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" color="transparent">
        <Toolbar>
          <Typography color="white" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {routes.map((item) => (
            <Button sx={{
              color: "whitesmoke"
            }} color="inherit"  variant="text" key={item.route} onClick={()=> {
              history.push(item.route)
            }}>{item.label}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
