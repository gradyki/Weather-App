import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


export default function Layout(props) {
  return (
    <div className='layout'>
      <NavBar />
      <div className='layout-children'>
        {props.children}
      </div>
      
      <Footer/>
    </div>
  )
}
