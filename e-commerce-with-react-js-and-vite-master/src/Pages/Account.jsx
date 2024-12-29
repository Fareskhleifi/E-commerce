import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './Home.css';
import LoginRegister from '../components/SigIn';
import NavBar from '../components/NavBar';

export function Account() {
  return (
    <div>
      <div>
        <NavBar/>
        <div className='baad'>
        </div>
        <LoginRegister/>
        <div className='baad'>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
