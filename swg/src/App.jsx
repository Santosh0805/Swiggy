import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [restList, setResList] = useState([])

  useEffect(()=> {
    fetchRes()
  },[])

  async function fetchRes(){
    const response =await fatch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  
    const res = await response.json();
    console.log(res.data.cards[1].card.card.gridElement.infowithstyle.restaurants);
    setResList(res.data.cards[1].card.card.gridElement.infowithstyle.restaurants);

  }

  return (
    <>
      <div className=''>
         
      </div>
    </>
  )
}

export default App
