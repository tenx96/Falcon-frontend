import ComingSoon from 'components/ComingSoon'
import axios from "axios"
import React, { useEffect, useState } from 'react'
import FoodCard from 'components/FoodCard'
import { Grid } from "@mui/material";
export const ROUTE_FOOD = "/food"


function Food() {
    const fetchData = () => {
        return axios.get("https://5db305d7a394f5001443a97d.mockapi.io/api/v1/food")
              .then((response) => { 
                console.log(response.data)
                setlist(response.data)
              })}

    const [list, setlist] = useState({})
    useEffect(() => {
        fetchData();
        }, []);
    return (
    <>
        {Object.keys(list).length > 0 ? <div className="food-list" style={{marginTop:'64px'}}>
        <Grid justifyContent="center" container spacing={4}>
        {list['food'].map((item, i) => (
            <Grid item md={3} xs={12}>
                <FoodCard food={item} key={i}/>
            </Grid>
        ))}
        </Grid>
        </div> : <ComingSoon></ComingSoon>}
        
    </>
    )
}

export default Food
