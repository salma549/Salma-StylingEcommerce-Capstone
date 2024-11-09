


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate
// import axios from 'axios';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [accessories, setAccessories] = useState([]);
//   const [selectedAccessories, setSelectedAccessories] = useState([]);
//   const navigate = useNavigate();  // Initialize navigate hook

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then(response => {
//         setProduct(response.data);
//         setAccessories(response.data.accessories);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleAccessorySelection = (accessoryId) => {
//     setSelectedAccessories(prev =>
//       prev.includes(accessoryId) ? prev.filter(id => id !== accessoryId) : [...prev, accessoryId]
//     );
//   };

//   const handleAddToCart = () => {
//     // Store selected items (product and accessories) in state or localStorage
//     const selectedItems = {
//       productId: product._id,
//       productName: product.name,
//       productImage: product.image,
//       productPrice: product.price,
//       selectedAccessories: accessories.filter(accessory => selectedAccessories.includes(accessory._id))
//     };

//     // Navigate to cart page and pass the selectedItems
//     navigate('/cart', { state: selectedItems });
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
//       <p>₹{product.price} </p>

//       <div className="mt-6">
//         <h2 className="text-xl">Accessories</h2>
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           {accessories.map(accessory => (
//             <div key={accessory._id} className="flex items-center space-x-4">
//               <img
//                 src={accessory.image}
//                 alt={accessory.name}
//                 className="w-16 h-16 object-cover"
//               />
//               <div>
//                 <input
//                   type="checkbox"
//                   id={accessory._id}
//                   onChange={() => handleAccessorySelection(accessory._id)}
//                 />
//                 <label htmlFor={accessory._id} className="ml-2">{accessory.name} - ₹{accessory.price}</label>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button onClick={handleAddToCart} className="bg-green-500 text-white py-2 px-4 mt-6 rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;




// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [accessories, setAccessories] = useState([]);
//   const [selectedAccessories, setSelectedAccessories] = useState([]);
//   const navigate = useNavigate(); // for navigation after adding to cart

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then(response => {
//         setProduct(response.data);
//         setAccessories(response.data.accessories);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleAccessorySelection = (accessoryId) => {
//     setSelectedAccessories(prev =>
//       prev.includes(accessoryId) ? prev.filter(id => id !== accessoryId) : [...prev, accessoryId]
//     );
//   };

//   const handleAddToCart = () => {
//     const cartItem = {
//       productId: product._id,
//       productName: product.name,
//       productImage: product.image,
//       productPrice: product.price,
//       selectedAccessories: selectedAccessories.map(id => accessories.find(a => a._id === id))
//     };

//     // Use a global state management solution or local storage to manage the cart
//     // For example, using local storage (just as an example, not recommended for production)
//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     existingCart.push(cartItem);
//     localStorage.setItem('cart', JSON.stringify(existingCart));

   
//     navigate('/cart'); // Redirect to cart page after adding to cart
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
//       <p>{product.price} </p>

//       <div className="mt-6">
//         <h2 className="text-xl">Accessories</h2>
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           {accessories.map(accessory => (
//             <div key={accessory._id} className="flex items-center space-x-4">
//               <img
//                 src={accessory.image}
//                 alt={accessory.name}
//                 className="w-16 h-16 object-cover"
//               />
//               <div>
//                 <input
//                   type="checkbox"
//                   id={accessory._id}
//                   onChange={() => handleAccessorySelection(accessory._id)}
//                 />
//                 <label htmlFor={accessory._id} className="ml-2">{accessory.name} - ₹ {accessory.price} </label>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button onClick={handleAddToCart} className="bg-green-500 text-white py-2 px-4 mt-6 rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;


// -----------


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { HiCheck } from 'react-icons/hi'; // Importing an icon for better UI

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [accessories, setAccessories] = useState([]);
//   const [selectedAccessories, setSelectedAccessories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then(response => {
//         setProduct(response.data);
//         setAccessories(response.data.accessories);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleAccessorySelection = (accessoryId) => {
//     setSelectedAccessories(prev =>
//       prev.includes(accessoryId) ? prev.filter(id => id !== accessoryId) : [...prev, accessoryId]
//     );
//   };

//   const handleAddToCart = () => {
//     const cartItem = {
//       productId: product._id,
//       productName: product.name,
//       productImage: product.image,
//       productPrice: product.price,
//       selectedAccessories: selectedAccessories.map(id => accessories.find(a => a._id === id))
//     };

//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     existingCart.push(cartItem);
//     localStorage.setItem('cart', JSON.stringify(existingCart));

//     navigate('/cart');
//   };

//   if (!product) return <div className="text-center py-10">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-80 md:h-96 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
//       />
//       <p className="text-2xl font-semibold text-green-600 mt-2">₹ {product.price}</p>

//       <div className="mt-8">
//         <h2 className="text-3xl font-semibold text-gray-800">Accessories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//           {accessories.map(accessory => (
//             <div key={accessory._id} className="flex items-center p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-gray-50">
//               <img
//                 src={accessory.image}
//                 alt={accessory.name}
//                 className="w-32 h-32 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
//               />
//               <div className="flex-1 pl-4">
//                 <input
//                   type="checkbox"
//                   id={accessory._id}
//                   onChange={() => handleAccessorySelection(accessory._id)}
//                   className="mr-2 cursor-pointer"
//                 />
//                 <label htmlFor={accessory._id} className="text-lg font-medium flex items-center">
//                   <HiCheck className={`${selectedAccessories.includes(accessory._id) ? 'text-green-500' : 'hidden'} mr-1`} />
//                   {accessory.name} - ₹ {accessory.price}
//                 </label>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button onClick={handleAddToCart} className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700 transition duration-200 transform hover:scale-105">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { HiCheck } from 'react-icons/hi';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [accessories, setAccessories] = useState([]);
//   const [selectedAccessories, setSelectedAccessories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then(response => {
//         setProduct(response.data);
//         setAccessories(response.data.accessories);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleAccessorySelection = (accessoryId) => {
//     setSelectedAccessories(prev =>
//       prev.includes(accessoryId) ? prev.filter(id => id !== accessoryId) : [...prev, accessoryId]
//     );
//   };

//   const handleAddToCart = () => {
//     const cartItem = {
//       productId: product._id,
//       productName: product.name,
//       productImage: product.image,
//       productPrice: product.price,
//       selectedAccessories: selectedAccessories.map(id => accessories.find(a => a._id === id))
//     };

//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     existingCart.push(cartItem);
//     localStorage.setItem('cart', JSON.stringify(existingCart));

//     navigate('/cart');
//   };

//   if (!product) return <div className="text-center py-10">Loading...</div>;

//   return (
//     <div className="max-w-full mx-auto p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden font-[poppins] relative">
//     {/* Product Heading and Image */}
//     <div className="relative p-10 bg-white rounded-t-3xl shadow-lg backdrop-blur-md border border-gray-300">
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">{product.name}</h1>
//       <div className="relative mx-auto max-w-lg hover:cursor-pointer">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover rounded-3xl mb-6 shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-100 hover:-translate-y-2"  // Added transition properties
//         />
//         <p className="text-3xl font-semibold text-gray-800 text-center mt-4">₹ {product.price}</p>
//       </div>
//     </div>

  

//       {/* Accessories Section */}
//       <div className="mt-12 bg-white rounded-b-3xl shadow-lg p-8 border border-gray-300">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Accessories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 hover:cursor-pointer">
//           {accessories.map(accessory => (
//             <div key={accessory._id} className="relative border border-gray-300 rounded-2xl shadow-md p-4 bg-white/90 backdrop-blur-md transform hover:scale-105 transition-all duration-300">
//               <img
//                 src={accessory.image}
//                 alt={accessory.name}
//                 className="w-auto h-auto object-cover rounded-lg mb-4 shadow-sm transition-transform duration-300 hover:scale-105"
//               />
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-700">{accessory.name}</h3>
//                 <p className="text-lg font-medium text-gray-600">₹ {accessory.price}</p>
//                 <label className="flex items-center justify-center mt-4">
//                   <input
//                     type="checkbox"
//                     onChange={() => handleAccessorySelection(accessory._id)}
//                     className="mr-2 cursor-pointer accent-indigo-600"
//                   />
//                   <HiCheck className={`${selectedAccessories.includes(accessory._id) ? 'text-indigo-500' : 'hidden'} mr-1`} />
//                 </label>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full mt-10 py-4 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;


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
    <div className="max-w-full mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden font-[poppins]">
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
        className="w-full mt-6 sm:mt-8 md:mt-10 py-3 sm:py-4 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg sm:text-xl hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;