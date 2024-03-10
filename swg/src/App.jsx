import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchRes();
  }, []);

  async function fetchRes() {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9160035&lng=77.64267889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      if (response) {
        const fac = await response.json();
        console.log(fac.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestList(fac.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

      } else {
        console.error('Failed');
      }

    } catch (error) {
      console.error('Error data:', error);
    }
  }

  return (
    <>
    {restList.length == 0 ? (<h2>Loading...</h2> ) : (<div>
      {restList.map((ele) => (<Cards />))}
      </div>)}
    </>
      );
}

export default App;
