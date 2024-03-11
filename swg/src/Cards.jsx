import React from 'react'

const Cards = (res) => {
    // console.log(res)
    const Url_image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    const {name, cuisines, areaName, avgRating,cloudinaryImageId,} = res.res.info
    return (
        <div>
            <div>
                <img src={Url_image + cloudinaryImageId} alt="" />
            </div>
            <h2>{name}</h2>
            <h3>{areaName}</h3>
            <p>cuisines - <span>{cuisines.join(' , ')}</span></p>
        </div>

    )
};

export default Cards;