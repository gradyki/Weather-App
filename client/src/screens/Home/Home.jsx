import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import LandingImage from '../../components/LandingImage/LandingImage'
import './Home.css'
// import axios from 'axios'
// // import {useEffect, useState } from 'react'
// import { currentURL } from '../../services/index'
import CurrentReport from '../../components/CurrentReport/CurrentReport'


function Home(props) {
  const { raleigh, newYork, copenhagen } = props

  console.log("this is props", props)
 
  return (
    <div>
    
      <NavBar />
      <LandingImage />
      <CurrentReport raleigh={raleigh} newYork={newYork} copenhagen={copenhagen}/>
        <Footer />
        
      
      </div>
  )
} 

export default Home;