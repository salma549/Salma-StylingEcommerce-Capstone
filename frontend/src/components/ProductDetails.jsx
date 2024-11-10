


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HiCheck } from 'react-icons/hi';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [accessories, setAccessories] = useState([]);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setAccessories(response.data.accessories);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleAccessorySelection = (accessoryId) => {
    setSelectedAccessories(prev => 
      prev.includes(accessoryId) ? prev.filter(id => id !== accessoryId) : [...prev, accessoryId]
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      productId: product._id,
      productName: product.name,
      productImage: product.image,
      productPrice: product.price,
      selectedAccessories: selectedAccessories.map(id => accessories.find(a => a._id === id))
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    navigate('/cart');
  };

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden font-[poppins] mt-24">
      {/* Product Heading and Image */}
      <div className="relative p-4 sm:p-8 md:p-10 bg-white rounded-t-3xl shadow-lg backdrop-blur-md border border-gray-300">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">{product.name}</h1>
        <div className="relative mx-auto max-w-xs sm:max-w-md md:max-w-lg hover:cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-3xl mb-4 sm:mb-6 shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-100 hover:-translate-y-2"
          />
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center mt-2 sm:mt-4">₹ {product.price}</p>
        </div>
      </div>

      {/* Accessories Section */}
      <div className="mt-6 sm:mt-8 md:mt-12 bg-white rounded-b-3xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-300">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">Accessories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {accessories.map(accessory => (
            <div key={accessory._id} className="relative border border-gray-300 rounded-2xl shadow-md p-4 bg-white/90 backdrop-blur-md transform hover:scale-105 transition-all duration-300">
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-auto object-cover rounded-lg mb-2 sm:mb-4 shadow-sm transition-transform duration-300 hover:scale-105"
              />
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">{accessory.name}</h3>
                <p className="text-md sm:text-lg font-medium text-gray-600">₹ {accessory.price}</p>
                <label className="flex items-center justify-center mt-2 sm:mt-4">
                  <input
                    type="checkbox"
                    onChange={() => handleAccessorySelection(accessory._id)}
                    className="mr-2 cursor-pointer accent-indigo-600"
                  />
                  <HiCheck className={`${selectedAccessories.includes(accessory._id) ? 'text-indigo-500' : 'hidden'} mr-1`} />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full mt-6 sm:mt-8 md:mt-10 py-3 sm:py-4 rounded-full shadow-lg bg-[#C99780] text-white font-semibold text-lg sm:text-xl  hover:bg-[#f0cab8] transition-all transform hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;