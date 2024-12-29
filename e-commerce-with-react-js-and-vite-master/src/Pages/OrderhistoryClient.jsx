// ContactUs.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LatestPayments from '../components/OrderHistory';

export function OHclient() {
  return (
    <div >
      <LatestPayments />
      <Footer/>
    </div>
  );
}
