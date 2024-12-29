// Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import SlideSection from '../components/SildeSection'; // Corrected the component name
import './Home.css';
import NavBar from '../components/NavBar';
import Promo from '../components/Promo';
import Lastes from '../components/Last';
import Features from '../components/Features';
import WinterCollectionCard from '../components/Winter';
import TestimonialsSection from '../components/Testimonial';

export function Home() {
  return (
    <div>
      <div >
        <NavBar />
      <div className='baad'></div>
        <SlideSection />
        <Lastes />
        <div className='baad'></div>
        <Promo/>
        <div className='baad1'></div>
        <Features/>
        <WinterCollectionCard/>
        <div className='baad1'></div>
        <TestimonialsSection/>
        <div className='baad1'></div>
        <Footer />
      </div>
    </div>
  );
}
