




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Category({ category }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products based on category
//     axios.get(`http://localhost:5000/api/products?category=${category}`)
//       .then(response => {
//         // Filter products by category in case the API returns mixed data
//         const filteredProducts = response.data.filter(product => product.category === category);
//         setProducts(filteredProducts);
//       })
//       .catch(error => console.log(error));
//   }, [category]);

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-6">{category.charAt(0).toUpperCase() + category.slice(1)} Dresses</h1>
//       <div className="grid grid-cols-3 gap-6">
//         {products.map(product => (
//           <Link key={product._id} to={`/product/${product._id}`}>
//             <div className="border p-4">
//               <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
//               <h2 className="text-xl">{product.name}</h2>
//               <p>₹{product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Men component for displaying men's clothing
// export function Women() {
//   return <Category category="women" />;
// }


// --------------


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Category({ category }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products based on category
//     axios.get(`http://localhost:5000/api/products?category=${category}`)
//       .then(response => {
//         const filteredProducts = response.data.filter(product => product.category === category);
//         setProducts(filteredProducts);
//       })
//       .catch(error => console.log(error));
//   }, [category]);

//   return (
//     <div className="p-5 max-w-screen-xl mx-auto bg-white">
//       <h1 className="text-4xl md:text-5xl mb-20 text-center font-extrabold  text-black text-transparent bg-clip-text tracking-widest font-serif ">
//         {category.charAt(0).toUpperCase() + category.slice(1)} Collection
//       </h1>

//       {/* Asymmetrical Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-14">
//         {products.map(product => (
//           <Link key={product._id} to={`/product/${product._id}`} className="group">
//             <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              
//               {/* Image Section with Hover Overlay */}
//               <div className="relative overflow-hidden h-80 w-full">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
//                 {/* Removed the text overlay on hover */}
//                 {/* <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <p className="text-lg font-medium">{product.name}</p>
//                   <p className="text-md">₹{product.price}</p>
//                 </div> */}
//               </div>
              
//               {/* Product Info Section with Frosted Glass Effect */}
//               <div className="p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-xl duration-500 rounded-lg">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3 transition-transform transform">
//                   {product.name}
//                 </h2>
//                 <p className="text-lg font-medium text-gray-600 mb-4">₹{product.price}</p>
//                 <button className=" rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 py-2 px-6">
//                   View Accessories
//                 </button>
//               </div>

//               {/* Removed Neon Glow and Hover Outline */}
//               {/* The following div is commented out to remove hover outlines */}
//               {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 transition duration-500 group-hover:shadow-neon-glow"></div> */}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export function Women() {
//   return <Category category="women" />;
// }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Category({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on category
    axios.get(`http://localhost:5000/api/products?category=${category}`)
      .then(response => {
        const filteredProducts = response.data.filter(product => product.category === category);
        setProducts(filteredProducts);
      })
      .catch(error => console.log(error));
  }, [category]);

  return (
    <div className="p-4 xs:p-6 sm:p-8 max-w-screen-xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-inner rounded-lg mt-14 font-signature">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl mb-8 xs:mb-10 sm:mb-16 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider font-serif">
        {category.charAt(0).toUpperCase() + category.slice(1)} Collection
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {products.map(product => (
          <Link key={product._id} to={`/product/${product._id}`} className="group">
            <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-white/30">
              
              {/* Image Section with Hover Overlay */}
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Product Info Section */}
              <div className="p-4 sm:p-6 text-center bg-white/70 backdrop-blur-md rounded-b-2xl transition-all duration-500">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-800 mb-2 transition-transform transform group-hover:scale-105">
                  {product.name}
                </h2>
                <p className="text-base xs:text-lg sm:text-xl font-medium text-gray-600 mb-3 xs:mb-4">₹{product.price}</p>
                <button className="rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm xs:text-base sm:text-lg py-2 px-4 sm:px-6 hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                  View Accessories
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Women() {
  return <Category category="women" />;
}

export default Category;