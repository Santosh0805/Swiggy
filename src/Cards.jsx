import React from 'react';

const Cards = (res) => {
    const Url_image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = res.res.info;

    return (
        <div className="shadow-lg rounded-lg overflow-hidden bg-white">
            <div>
                <img className="w-96 h-56 rounded-3xl" src={Url_image + cloudinaryImageId} alt={name} />
            </div>
            <div className="">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <h3 className="text-lg text-gray-700 mb-2">Price: {costForTwo}</h3>
                <p className="text-sm text-gray-600 mb-2">Avg Ratings: {avgRating}</p>
                <p className="text-sm text-gray-600">Cuisines: <span className="font-semibold">{cuisines.join(', ')}</span></p>
            </div>
        </div>
    );
};






export default Cards;
