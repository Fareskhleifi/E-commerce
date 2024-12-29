import React, { useState, useEffect } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './main.css';
import defaultImage from './imgs/VSPrin.jpg'; // Assurez-vous que ce chemin est correct

const Main = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Récupère les produits depuis le backend
    axios.get('http://localhost:8080/produit')
      .then(response => {
        const productsData = response.data;
        setProducts(productsData);
        setFilteredProducts(productsData);
        
        const uniqueCategories = [...new Set(productsData.map(product => product.catégorie))];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    const images = import.meta.glob('./imgs/*');

    const updatedProducts = products.map(product => {
      if (product.img && images[`./imgs/${product.img}`]) {
        return images[`./imgs/${product.img}`]()
          .then((module) => ({
            ...product,
            imgSrc: module.default,
          }))
          .catch(() => ({
            ...product,
            imgSrc: defaultImage,
          }));
      }
      return {
        ...product,
        imgSrc: defaultImage,
      };
    });

    Promise.all(updatedProducts).then(updatedProducts => setFilteredProducts(updatedProducts));
  }, [products]);

  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredArray = products.filter(product =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filteredArray);
  };

  const ByCat = (category) => {
    const filteredArray = products.filter(product =>
      product.catégorie && product.catégorie.toLowerCase() === category.toLowerCase()
    );
    setFilteredProducts(filteredArray);
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="search flex justify-center items-center px-5 py-2 rounded mx-auto" style={{ height: '50px', width: '700px' }}>
          <input
            type="text"
            placeholder="Search product"
            className="bg-transparent outline-0 text-center w-full h-full"
            onChange={searchHandler}
          />
          <button onClick={searchHandler} className="ml-2">
            <CiSearch />
          </button>
        </div>
      </div>

      <div className="categories bg-white w-full flex justify-between space-x-8 px-20 py-8">
        {categories.map(category => (
          <div key={category} className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl hover-button">
            <button onClick={() => ByCat(category)}>{category}</button>
          </div>
        ))}
      </div>

      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20 bg-white-100">
        {filteredProducts.map((product, idx) => (
          <NavLink to={`/produit/${product.id}`} key={idx}>
            <div className="product h-[300px] bg-white drop-shadow-2xl p-2 border rad">
              <img src={product.imgSrc || defaultImage} alt="" className="w-full h-[60%] object-cover p-2" />
              <div className="m-2 bg-gray-100 p-2 bgg">
                <h1 className="text-xl font-semibold">{product.title}</h1>
                <p className="text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">${product.price}</p>
                  <CiShoppingCart size={'1.4rem'} style={{ color: '#0B253E' }} />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Main;
