import { Button, Icon } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTE_HOME } from "routes/Home";
import "./Navbar.css";

function Navbar({ title, routes }) {
  const history = useHistory();
//   bool to check if current route is at home
    const [isHome, setIsHome] = useState(history.location.pathname == ROUTE_HOME);

    // make color changes based on location
    history.listen((location , action) => {
        setIsHome(location.pathname == ROUTE_HOME)
    })


  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark">
      <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
        <a style={{
            color : isHome ? "white" : "black"
        }} className="navbar-brand">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon>menu</Icon>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {routes.map((item, index) => (
              <Button
                key={index}
                variant="text"
                onClick={() => {
                  history.push(item.route);
                }}
                sx={{
                  color: isHome ? "white" : "black",
                }}
              >
                {item.label}
              </Button>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
