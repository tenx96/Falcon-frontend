import { Button } from "@mui/material";
import * as React from "react";
import "./style.css"
export default function TicketCard({
  title,
  description,
  image,
  imageHeight = 140,
  maxWidth = 345,
}) {
  return (
        <div  className="ticket-container" style={{
            backgroundImage : `url("${image}")`
        }}>
            <div>
                <Button color="inherit" variant="contained" sx={{
                    background: "whitesmoke",
                    color: "black",
                    borderRadius : "100px",
                    mb : 2
                }}>Get Yor Tickets Now</Button>
            </div>


        </div>
  );
}
