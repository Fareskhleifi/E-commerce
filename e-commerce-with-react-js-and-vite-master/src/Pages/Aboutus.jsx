import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './Home.css';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Stat from '../components/Stat';
import Trusted from '../components/Trusted';

export function Aboutus() {
  return (
    <div>
      <div>
        <NavBar/>
        <div className='baad'>
        </div>
        <About/>
        <div className='baad3'>
        </div>
        <Stat/>
        <div className='baad4'>
        </div>
        <Trusted/>
        <div className='baad3'>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
