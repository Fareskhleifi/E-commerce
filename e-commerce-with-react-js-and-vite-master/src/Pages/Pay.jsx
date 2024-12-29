// ContactUs.jsx
import React from 'react';
import NavBarPayment from '../components/NavBarPayment';
import Payment from '../components/Payment';
import Footer from '../components/Footer';

export function Pay() {
  return (
    <div>
      <NavBarPayment/>
      <div className='baad'></div>
      <Payment/>
      <div className='baad'></div>
      <Footer/>
    </div>
  );
}
