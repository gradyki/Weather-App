import Layout from '../../components/Layout/Layout'
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
    <Layout>
      <div>
        <div>
          <LandingImage/>
        </div>
        <main>
          <CurrentReport raleigh={raleigh} newYork={newYork} copenhagen={copenhagen}/>
        </main>
      </div>
    </Layout>
      
        
      
      
  )
} 

export default Home;