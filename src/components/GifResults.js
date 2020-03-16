import React from 'react';
import GifItem from './GifItem';

// construct a stateless functional component to receive a 
// list of gifs, loop through them, then render a GifItem 
// component:
const GifResults = (props) => {
    const gifItems = props.gifs.map((image) => {
        // set a unique key for each GifItem
        return <GifItem key={image.id} gif={image} />
    });
    return (
        <div className='gifGrid'>{gifItems}</div>
    );
};

export default GifResults;