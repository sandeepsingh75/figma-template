import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import image from '../../images/engin-akyurt-jaZoffxg1yc-unsplash 1.png'
import brand1 from '../../images/brand-1.png'
import brand2 from '../../images/brand-2.png'

const Collection = () => {
    return (
        <>        
        <Box sx={{background:'#F1F1F1'}}>
            <Grid container  sx={{position:'absolute', top:'14rem' ,height:"90vh", p:2}}>
                <Grid item md={6} sx={{mt:10, ms:5}}> 
                    <h1 sx={{fontSize:'5rem', m:'2.5'}}>Collections</h1>
                    <h6 sx={{fontSize:"1rem"}}>You Can Explore And Shop Many Different Collection <br />
                    From Various Brands Here</h6>
                </Grid>
                <Grid item md={6} sx={{width:'100%'}}>
                   <img src={image} alt="" />
                </Grid>
            </Grid>
            {/* <Button varient="text"> <img src={brand1} alt="" /></Button>
            <Button varient="text"> <img src={brand2} alt="" /></Button> */}
        </Box>
        
        </>
    );
};

export default Collection;