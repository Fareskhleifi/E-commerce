import React,{useState} from 'react'
import {CiShoppingCart} from 'react-icons/ci'
import watch from './imgs/Complem1.jpg';
import laptop from './imgs/Complem2.jpg';
import keyboard from './imgs/Complem3.jpg';
import sunGlass from './imgs/Complem4.jpg';
import leatherWatch from './imgs/Complem5.jpg';
import mouse from './imgs/Complem6.jpg';
import monitor from './imgs/Complem7.jpg';
import c8 from './imgs/Complem8.jpg';
import c9 from './imgs/Complem9.jpg';
import c10 from './imgs/Complem10.jpg';

import { NavLink } from 'react-router-dom';
import './main.css';

const Lastes = () => {
  let Products =[
    {
      img:sunGlass,
      title:'Mini Table',
      description:'lorem ipsum dolar',
      price:40
    },
    {
      img:keyboard,
      title:'Chaise longue',
      description:'lorem ipsum dolar',
      price:100
    },
    {
      img:watch,
      title:'Mini Chaise',
      description:'lorem ipsum dolar',
      price:20
    },
    {
      img:mouse,
      title:'parasol Camp',
      description:'lorem ipsum dolar',
      price:120
    },
    {
      img:laptop,
      title:'Oreiller de couchage',
      description:'lorem ipsum dolar',
      price:25
    },
    {
      img:leatherWatch,
      title:'Mini Table Plastique',
      description:'lorem ipsum dolar',
      price:150
    },
    {
      img:monitor,
      title:'Tente pour Voiture',
      description:'lorem ipsum dolar',
      price:250
    },
    {
      img:c8,
      title:'Lit',
      description:'lorem ipsum dolar',
      price:150
    },
    {
      img:c9,
      title:'Lit Simple',
      description:'lorem ipsum dolar',
      price:40
    },
    {
      img:c10,
      title:'Lit bébé',
      description:'lorem ipsum dolar',
      price:40
    }, 
   

  ]
  const [filteredProducts,setFilteredProducts]=useState(Products)
  const searchHandler = (e)=>{
    const filteredArray= Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
    if(filteredArray.length !=0){
      setFilteredProducts(filteredArray);
    }
  }
  return (
    <div>
    <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                <div class="w-full flex-col justify-start items-center gap-3 flex">
                    <h2 class="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Nos derniers articles Complémentaire</h2>
                    <p class="max-w-2xl text-center text-gray-400 text-base font-normal leading-relaxed">Découvrez des analyses approfondies et des explications claires sur des systèmes et produits, pour mieux comprendre les concepts complexes.
                    </p>
                </div>
            </div>
        </div>
      </section>
    <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20 bg-white-100">
    {filteredProducts && filteredProducts.map((product,idx)=>{
      return(
        <NavLink to="/">
        <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border rad">
        <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2' />
        <div className='m-2 bg-gray-100 p-2 bgg'>
          <h1 className='text-xl font-semibold'>{product.title}</h1>
          <p className='text-sm'>{product.description}</p>
          <div className='flex justify-between items-center'>
            <p className='text-xl font-bold'>{product.price}.00 DT</p>
            <CiShoppingCart size={'1.4rem'} style={{ color: '#0B253E' }} />
            </div>
        </div>
      </div>
      </NavLink>
      )
    })}
    
  </div>
  </div>
  ) 
} 
export default Lastes;
