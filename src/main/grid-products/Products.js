import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <div>
            <h1>New Products</h1>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
 
    <ImageListItem >
      <img
        src="" alt="" loading="lazy" />
    </ImageListItem>

  
</ImageList>
        </div>
    );
};

export default Products;