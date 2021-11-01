import React from "react";
import Artist from "./Artists";
import Event, { COLOR_LIST } from "./Events";
import "./style.css";
import { Grid } from "@mui/material";
export const ROUTE_LINEUP = "/lineup";
const artistList = [
  {
    name: "Muse: The Singless",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/Muse_2nd_law.jpg",
    desc: "Listen to Muses's singles now, including Supermassive black hole",
  },
  {
    name: "Billie Eilish",
    image:
      "https://media.pitchfork.com/photos/608839f84c67840074db8afb/1:1/w_600/Billie-Eilish-Happier-Than-Ever.jpeg",
    desc: "Artist",
  },
  {
    name: "Still on My Mind",
    image:
      "https://media.pitchfork.com/photos/5c7d593e3a5a154e7b62f576/1:1/w_600/Dido_StillOnMyMind.jpg",
    desc: "Dido",
  },
];

const Eventslist = [
  {
    title: "Event Title",
    img: "https://picsum.photos/1000/1000",
    date: "Mon, Nov 22nd 2021",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    time: "6:00 AM",
  },
  {
    title: "Event Title",
    img: "https://picsum.photos/501/500",
    date: "Mon, Nov 22nd 2021",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    time: "9:00 AM",
  },
  {
    title: "Event Title",
    img: "https://picsum.photos/500/501",
    date: "Mon, Nov 22nd 2021",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    time: "12:00 PM",
  },
  {
    title: "Event Title",
    img: "https://picsum.photos/501/501",
    date: "Mon, Nov 22nd 2021",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    time: "2:00 PM",
  },
];

export default function Lineup() {

  const getEventColor = (index) => {
    if (index % 4 === 0) {
      return COLOR_LIST[3]
    }

    if (index % 3 === 0) {
      return COLOR_LIST[2]
    }

    if (index % 2 === 0) {
      return COLOR_LIST[1]
    }
    return COLOR_LIST[0]
  }


  return (
    <div className="lineup">
      <Grid container spacing={4}>
        {artistList.map((item, i) => (
          <Grid item md={4} xs={12}>
            <Artist artist={item} key={i} />
          </Grid>
        ))}
      </Grid>
      <section className="dark">
        <div className="container pt-5">
          {Eventslist.map((item, i) => (
            <Event key={i} color={getEventColor(i)} event={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
