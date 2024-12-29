// ContactUs.jsx
import React from 'react';
import Footer from '../components/Footer';
import NavBarConfirmed from '../components/NavBarConfirmed';
import OrderConfirmation from '../components/confirmed';

export function Con() {
  return (
    <div>
      <NavBarConfirmed/>
      <div className='baad'></div>
      <OrderConfirmation/>
      <div className='baad'></div>
      <Footer/>
    </div>
  );
}
