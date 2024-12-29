import React from 'react'
import {NavLink} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import OrderTrack from '../components/OrderTrack'
import NavBarConfirmed from '../components/NavBarFacture'
import Footer from '../components/Footer'
export  function OrderClient() {
  return (
    <>
    <NavBarConfirmed/>
    <div className='baad2'></div>
   <OrderTrack/>
   <div className='baad3'></div>
   <Footer/>
   </>
  )
}
