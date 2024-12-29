// ContactUs.jsx
import React from 'react';
import { Contact } from '../components/Contact';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export function ContactUs() {
  return (
    <div >
      <NavBar/>
      <Contact />
      <Footer/>
    </div>
  );
}
