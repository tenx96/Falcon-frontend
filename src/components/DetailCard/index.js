import { Button, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function DetailCard({title,description,image , imageHeight = 140 , maxWidth = 345}) {
  return (
    <Card elevation={0} sx={{ maxWidth}}>

        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions >
          <Grid container justifyContent="flex-end" alignItems="center" >
          <Button
              sx={{
                borderRadius: 100,
                ml: 2,
              }}
              variant="outlined"
              color="primary"
            >
             More Details
            </Button>
          </Grid>
        </CardActions>
    </Card>
  );
}
