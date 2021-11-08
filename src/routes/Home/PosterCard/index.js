import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import "./style.css";
import Grid from "@mui/material/Grid";
import EventAccordian from "./EventAccordian";
function PosterSlider({ data }) {
  const theme = useTheme();



  const mdAndDown = useMediaQuery(theme.breakpoints.down("md"));

  const [expanded, setExpanded] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    setExpanded(true)
  };

  const handleAccordianExpand = (isExpanded, index) => {
    console.log("EXPANDED , ", isExpanded);
    console.log("Index , ", index);
    setExpanded(isExpanded)
    setActiveStep(index);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Box width="100%">
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {data.map((item, index) => (
              <div className="swipable-item" key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: mdAndDown ? 500 : 600,
                      display: "block",
                      overflow: "hidden",
                    }}
                    src={item.image}
                    alt="event image"
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} pr={2}>
        {data.map((item, i) => (
          <EventAccordian
            key={i}
            {...item}
            expanded={expanded && activeStep === i}
            handleChange={(e, exp) => handleAccordianExpand(exp, i)}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </IconButton>
          }
        />
      </Grid>
    </Grid>
  );
}

export default PosterSlider;
