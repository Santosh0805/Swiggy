import React from 'react'

const Cards = (res) => {
    const Url_image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    const {name, cuisines, areaName, avgRating,cloudinaryImageId} = res.info
    return (
        <div>
            <div>
                <img src={Url_image + cloudinaryImageId} alt="" />
            </div>
            <h3>{name}</h3>
            <p>cuisines - <span>{cuisines.join(' , ')}</span></p>
            <h5>{areaName}</h5>
            <h5>Average Rating {avgRating}</h5>
        </div>

    )
}

export default Cards;