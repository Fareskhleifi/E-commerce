import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultImage from './imgs/moi.jpg'; // Ensure this path is correct
import { useUser } from './UserContext'; // Adjust the path as needed

const ProductPage = () => {
  const { user } = useUser();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [userImageSrc, setUserImageSrc] = useState(defaultImage);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    img: '',
    price: '',
    qte: '1', // Default quantity set to 2
    email: user?.email || '', // Initialize with user's email
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form Data Before Submission:', formData); // Add this line to log formData
    
    const data = {
      img: formData.img,
      price: formData.price,
      qte: formData.qte,
      title: formData.title,
      email: formData.email,
    };
  
    try {
      const response = await axios.post('http://localhost:8080/cart', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Cart created:', response.data);
    } catch (error) {
      console.error('Error creating cart:', error);
    }
  };
  
  
  console.log('Qte before submission:', formData.qte);

  useEffect(() => {
    // Fetch the product data based on the ID
    axios.get(`http://localhost:8080/produit/${id}`)
      .then(response => {
        setProduct(response.data);
        setFormData({
          ...formData,
          title: response.data.title,
          img: response.data.img,
          price: response.data.price,
        });
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError('Error fetching product data');
      });
  }, [id]);

  useEffect(() => {
    if (product?.img) {
      import(`./imgs/${product.img}`)
        .then((image) => {
          setUserImageSrc(image.default || defaultImage);
        })
        .catch(() => {
          setUserImageSrc(defaultImage);
        });
    } else {
      setUserImageSrc(defaultImage);
    }
  }, [product]);

  if (error) {
    return <p>{error}</p>; // Display error message if there's an error
  }

  if (!product) {
    return <p>Loading...</p>; // Display loading message while fetching data
  }

  return (
    <div className="font-sans">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={userImageSrc || defaultImage}
                  alt={product.title}
                  className="w-full cursor-pointer rounded-md"
                />
              ))}
            </div>
            <img src={userImageSrc || defaultImage} alt={product.title} className="w-4/5 rounded-md object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">${product.price}</p>
              <p className="text-gray-400 text-xl"><strike>$16</strike> <span className="text-sm ml-1.5">Tax included</span></p>
            </div>

            <div className="flex space-x-2 mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <svg key={index} className="w-5 fill-[#0B253E]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {['SM', 'MD', 'LG', 'XL'].map((size, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-10 h-10 border-2 ${size === 'MD' ? 'border-[#0B253E]' : ''} hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <input type="text" name="title" value={product.title} hidden />
              <input type="text" name="img" value={product.img} hidden />
              <input type="text" name="price" value={product.price} hidden />
              <input type="number" name="qte" value={formData.qte} hidden />
              <input type="text" name="email" value={formData.email} hidden />
              <button type="submit" className="w-full mt-8 px-6 py-3 bg-[#0B253E] hover:bg-[#FF6910] text-white text-sm font-semibold rounded-md">Add to cart</button>
            </form>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">About the item</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>{product.description}</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
              <div className="space-y-3 mt-4">
                {[{ rating: '5.0', width: '2/3', percentage: '66%' }, { rating: '4.0', width: '1/3', percentage: '33%' }, { rating: '3.0', width: '1/6', percentage: '16%' }, { rating: '2.0', width: '1/12', percentage: '8%' }, { rating: '1.0', width: '6%', percentage: '6%' }].map((review, index) => (
                  <div key={index} className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">{review.rating}</p>
                    <svg className="w-5 fill-[#0B253E] ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div className={`w-${review.width} h-full rounded-md bg-[#0B253E]`}></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">{review.percentage}</p>
                  </div>
                ))}
              </div>

              <button type='button' className="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md">Read all reviews</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
