import React from 'react';

function Card({images}) {
    return(
        <>
            {images.map((image, index) => (
                <div
                    className="card"
                    key={index}
                    style={{background: `url(${image.url})`}}
                ></div>
            ))}
        </>
    );
}

export default Card;