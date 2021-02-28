import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useEffect, useState } from 'react'
import { currentURL } from '../../services/index'


function Home() {
  const [raleigh, setRaleigh] = useState([])

  console.log(`${currentURL}Raleigh`)


  useEffect(() => {
    const getCurrent = async () => {
      const resp = await axios.get(`${currentURL}Raleigh`)
      setRaleigh(resp.data)
    }
    getCurrent()
  },[])

  console.log(raleigh)
console.log(raleigh.current.weather_icons[0])

  return (
    <div>
      <Nav />
<Link to='/detail'>
      <div >
          <h1>{raleigh.location.name}, {raleigh.location.region}</h1>
          <img src={raleigh.current.weather_icons[0]} />
          <h5>{Math.floor((raleigh.current.temperature * 9/5) + 32 )}</h5>
        </div>
        </Link>
      <div>
        <Footer />
        </div>
    </div>
  )
} 

export default Home;