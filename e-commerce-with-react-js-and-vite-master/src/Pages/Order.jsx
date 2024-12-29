import React from 'react'
import {NavLink} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import OrderTrack from '../components/OrderTrack copy'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export  function Order() {
  return (
    <>
    <NavBar/>
    <div className='baad2'></div>
   <OrderTrack/>
   <div className='baad3'></div>
   <Footer/>
   </>
  )
}
