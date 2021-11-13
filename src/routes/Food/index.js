import { Alert, AlertTitle, Box, CircularProgress, Grid } from "@mui/material";
import { getFood } from "api/foodApi";
import FoodCard from "components/FoodCard";
import { useApi } from "customHooks/useApi";
import React from "react";
export const ROUTE_FOOD = "/food";

function Food() {
  const [foodData, loading, isError] = useApi(getFood);

  return (
    <>
      {!isError ? (
        !loading && foodData ? (
          <div className="food-list" style={{ marginTop: "64px" }}>
            <Grid justifyContent="center" container spacing={4}>
              {foodData["food"].map((item, i) => (
                <Grid item md={3} xs={12}>
                  <FoodCard food={item} key={i} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )
      ) : (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
        </Box>
      )}
    </>
  );
}

export default Food;
