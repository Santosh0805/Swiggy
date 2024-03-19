import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './Cards';
import Heading from './Navbar/Heading';
import cors from 'cors';

function App() {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchRes();
  }, [ ]);

  async function fetchRes() {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9160035&lng=77.64267889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      if (response) {
        const res = await response.json();
        console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestList(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
    } catch (error) {
      console.error('Error data:', error);
    }
  };

  return (
    <>
    <Heading />
      {restList.length == 0 ? 
      (<h2>Loading...!!!!</h2>
      ) : (
      <div className="grid grid-cols-4 gap-5 ">
        {restList.map((ele) =>
        // {console.log(ele)}
          (<Cards key={ele.info.id} res={ele} />))}
      </div>)}
    </>
  );
}



import cors from 'cors';

App.use(cors());
export default App;
