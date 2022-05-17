import React from 'react';
import './Collection.css';

const Collection = () => {
    return (
        <div className='row main'>
            <div className="col-md-6 my-auto">
            <h1 className='collection'>Collection</h1>
            <h4 className='detail mt-4'> <p className='line1'>You Can Explore And Shope Different Collection </p> <p className='line2'>For Various Brands Here</p></h4>
            <button className='button'> Shop Now</button>
            </div>
            
            <div className="col-md-4">
                <div className='image'>

                </div>
            </div>
       
        </div>
    );
};

export default Collection;