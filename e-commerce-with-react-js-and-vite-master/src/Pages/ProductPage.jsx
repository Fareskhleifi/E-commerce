// ContactUs.jsx
import React from 'react';
import Footer from '../components/Footer';
import ProductPage from '../components/ProuctPage';
import Example from '../components/NavBarShop';

export function ProductPage1() {
  return (
    <div >
      <Example/>
      <div className='baad'></div>
      <ProductPage/>
      <div className='baad'></div>
      <Footer/>
    </div>
  );
}
