import { makeStyles } from '@material-ui/styles';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import brand from '../../images/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.png'

// const useStyle = makeStyles({
//     banner:{
//         position:'absolute',
//         top:'148rem',
//         backgroundImage:'url(https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg',
//         backgroundPosition:'center'
//     }
// })

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const BrandBanner = () => {
    // const classes = useStyle();
    return (
        <Box sx={{position:'absolute',top:'148rem', backgroundImage:`url(${brand})`, backgroundPosition:'center', height:400, background:"green", width:'100%'}} >
            {/* <h1 style={useStyle.banner}>Brand Banner</h1> */}
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BrandBanner;