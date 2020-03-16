import React from 'react';

// construct a stateless functional component to take the
// image object passed as props from the GifList & pass
// the URL into an image element:
const GifItem = (image) => {
    return (
        <div className="gif_item">
            <img id='gifImg' alt="gif" src={image.gif.images.downsized.url} />
        </div>
    )
};

export default GifItem;
