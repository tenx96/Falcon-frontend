import { Container, Box, Typography } from "@mui/material";
import React from "react";
import TourismCard from "./TourismCard";
import "./tourism.css"
export const ROUTE_TOURISM = "/tourism";

function Tourism() {
  return (
    <Container className="tourism-container" maxWidth="lg">
      <Box my={3}>
        <Box my={4}>
          <Typography
            textAlign="center"
            fontWeight="bold"
            variant="h3"
            gutterBottom
            component="div"
          >
            Places to Visit
          </Typography>
        </Box>
        {[1, 2, 3, 4, 5].map((num) => (
          <Box mt={10}>
            <TourismCard
              right={num % 2 == 0}
              title="Panimur"
              description="Aliquip laborum duis amet adipisicing duis ad in esse tempor do eiusmod. Fugiat cillum ex eu nisi. Nulla ad deserunt ut veniam fugiat Lorem. Aliqua id laboris cillum ut officia id consequat. Amet ullamco fugiat in reprehenderit aliquip excepteur do duis aute."
              image={`http://unsplash.it/300/40${num}?random&gravity=center`}
              location="Aliqua amet ex eu voluptate esse."
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Tourism;
