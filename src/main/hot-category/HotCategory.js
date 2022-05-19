import { Box, Button, Grid } from "@mui/material";
import React from "react";
import b1 from '../../images/brand-1.png'
import b2 from '../../images/brand-2.png'
import b3 from '../../images/brand-3.png'
import b4 from '../../images/brand-4.png'
import b5 from '../../images/brand-5.png'
import c1 from '../../images/image-category-1.png'
import c2 from '../../images/image-category-2.png'
import c3 from '../../images/image-category-3.png'
import c4 from '../../images/image-category-4.png'
import c5 from '../../images/image-category-5.png'

const HotCategory = () => {
  return (
    <Box sx={{position:'absolute',top:'53rem', width: "100%", height:'20rem'}}>
       
        <Button varient="contained"><img src={b1} alt="" /></Button>
        <Button varient="contained"><img src={b2} alt="" /></Button>
        <Button varient="contained"><img src={b3} alt="" /></Button>
        <Button varient="contained"><img src={b4} alt="" /></Button>
        <Button varient="contained"><img src={b5} alt="" /></Button>
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:'2rem'}}>
        <Grid item xs={6}>
        <Box> <img src={c1} alt="" /></Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <Box> <img src={c2} alt="" /></Box>
            </Grid>
            <Grid item xs={6}>
            <Box> <img src={c3} alt="" /></Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
            <Box> <img src={c4} alt="" /></Box>
            </Grid>
            <Grid item xs={6}>
            <Box> <img src={c5} alt="" /></Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotCategory;
