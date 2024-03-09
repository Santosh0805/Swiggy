import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [restList, setResList] = useState([])

  useEffect(()=> {
    fetchRes()
  },[])

  async function fetchRes(){
    const response =await fatch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9160035&lng=77.64267889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    
    const res = await response.json();
    console.log(res.data.cards[1])


  }



  return (
    <>
      <div className=''>
         
      </div>
    </>
  )
}

export default App
