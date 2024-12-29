import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './Home.css';
import RegistrationForm from '../components/FormReg';
import NavBar from '../components/NavBar';

export function Registration() {
  return (
    <div>
      <div >
        <NavBar/>
        <div className='baad'>
        </div>
        <RegistrationForm/>
        <div className='baad'>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
