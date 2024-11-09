


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Cart() {
//   const location = useLocation();
//   const selectedItems = location.state;

//   if (!selectedItems) return <div>No items in cart.</div>;

//   const { productName, productImage, productPrice, selectedAccessories } = selectedItems;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-6">Cart</h1>

//       <div className="mb-4">
//         <h2 className="text-2xl">Product</h2>
//         <img src={productImage} alt={productName} className="w-48 h-48 object-cover mb-4" />
//         <p>{productName}</p>
//         <p>{productPrice} USD</p>
//       </div>

//       <div>
//         <h2 className="text-2xl">Selected Accessories</h2>
//         {selectedAccessories.length > 0 ? (
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {selectedAccessories.map(accessory => (
//               <div key={accessory._id} className="flex items-center space-x-4">
//                 <img
//                   src={accessory.image}
//                   alt={accessory.name}
//                   className="w-16 h-16 object-cover"
//                 />
//                 <div>
//                   <p>{accessory.name} - {accessory.price} USD</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No accessories selected.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(items);
//   }, []);

//   const removeAccessory = (cartIndex, accessoryId) => {
//     const updatedItems = [...cartItems];
//     updatedItems[cartIndex].selectedAccessories = updatedItems[cartIndex].selectedAccessories.filter(accessory => accessory._id !== accessoryId);
//     setCartItems(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
//   };

//   const removeProduct = (cartIndex) => {
//     const updatedItems = cartItems.filter((_, index) => index !== cartIndex);
//     setCartItems(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
//   };

//   if (cartItems.length === 0) return <div>No items in cart.</div>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-6">Cart</h1>

//       {cartItems.map((item, cartIndex) => (
//         <div key={item.productId} className="mb-4">
//           <h2 className="text-2xl">Product</h2>
//           <img src={item.productImage} alt={item.productName} className="w-48 h-48 object-cover mb-4" />
//           <p>{item.productName}</p>
//           <p>{item.productPrice} USD</p>
//           <button onClick={() => removeProduct(cartIndex)} className="bg-red-500 text-white py-1 px-2 mt-4 rounded">
//             Remove Product
//           </button>

//           <div>
//             <h2 className="text-2xl">Selected Accessories</h2>
//             {item.selectedAccessories && item.selectedAccessories.length > 0 ? (
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 {item.selectedAccessories.map(accessory => (
//                   <div key={accessory._id} className="flex items-center space-x-4">
//                     <img
//                       src={accessory.image}
//                       alt={accessory.name}
//                       className="w-16 h-16 object-cover"
//                     />
//                     <div className="flex-1">
//                       <p>{accessory.name} - {accessory.price} USD</p>
//                     </div>
//                     <button
//                       onClick={() => removeAccessory(cartIndex, accessory._id)}
//                       className="bg-red-500 text-white py-1 px-2 rounded"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No accessories selected.</p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ShoppingCartIcon } from '@heroicons/react/24/solid';


// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(items);
//   }, []);

//   const removeAccessory = (cartIndex, accessoryId) => {
//     const updatedItems = [...cartItems];
//     updatedItems[cartIndex].selectedAccessories = updatedItems[cartIndex].selectedAccessories.filter(
//       (accessory) => accessory._id !== accessoryId
//     );
//     setCartItems(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
//   };

//   const removeProduct = (cartIndex) => {
//     const updatedItems = cartItems.filter((_, index) => index !== cartIndex);
//     setCartItems(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
//   };

//   if (cartItems.length === 0) return <div className="p-10 text-center text-gray-600 text-lg">No items in cart.</div>;

//   return (
//     <div className="p-10">
//       <div className="text-center mb-6">
//         <ShoppingCartIcon className="w-14 h-14 text-blue-500 mx-auto" />
//         <h1 className="text-4xl font-bold text-gray-800 mt-2">Your Cart</h1>
//       </div>

//       {cartItems.map((item, cartIndex) => (
//         <div key={item.productId} className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product Details</h2>
//           <div className="flex items-center space-x-6">
//             <img
//               src={item.productImage}
//               alt={item.productName}
//               className="w-auto h-auto object-cover rounded-lg border border-gray-300"
//             />
//             <div>
//               <p className="text-2xl font-medium text-gray-800">{item.productName}</p>
//               <p className="text-lg text-blue-500 mt-1 font-semibold">₹{item.productPrice} </p>
//             </div>
//           </div>
//           <button
//             onClick={() => removeProduct(cartIndex)}
//             className="mt-4 bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 transition duration-200"
//           >
//             Remove Product
//           </button>

//           <div className="mt-6">
//   <h2 className="text-2xl font-semibold mb-2 text-gray-800">Selected Accessories</h2>
//   {item.selectedAccessories && item.selectedAccessories.length > 0 ? (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {item.selectedAccessories.map((accessory) => (
//         <div
//           key={accessory._id}
//           className="bg-gray-100 rounded-xl p-4 border border-gray-200 shadow-md flex flex-col items-center space-y-2"
//         >
//           <img
//             src={accessory.image}
//             alt={accessory.name}
//             className="w-auto h-auto object-cover rounded-md border border-gray-300"
//           />
//           <div className="text-center">
//             <p className="font-medium text-lg text-gray-800">{accessory.name}</p>
//             <p className="text-sm text-blue-500 font-semibold">₹{accessory.price}</p>
//           </div>
//           <button
//             onClick={() => removeAccessory(cartIndex, accessory._id)}
//             className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-200 mt-2"
//           >
//             Remove
//           </button>
//         </div>
     

//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-600">No accessories selected.</p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const removeAccessory = (cartIndex, accessoryId) => {
    const updatedItems = [...cartItems];
    updatedItems[cartIndex].selectedAccessories = updatedItems[cartIndex].selectedAccessories.filter(
      (accessory) => accessory._id !== accessoryId
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
  };

  const removeProduct = (cartIndex) => {
    const updatedItems = cartItems.filter((_, index) => index !== cartIndex);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
  };

  if (cartItems.length === 0) return <div className="p-4 sm:p-10 text-center text-gray-600 text-lg">No items in cart.</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 font-signature mt-10">
      <div className="text-center mb-6">
        <ShoppingCartIcon className="w-12 h-12 sm:w-14 sm:h-14 text-blue-500 mx-auto" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">Your Cart</h1>
      </div>

      {cartItems.map((item, cartIndex) => (
        <div key={item.productId} className="bg-white shadow-lg rounded-xl p-4 sm:p-6 mb-6 md:mb-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Product Details</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={item.productImage}
              alt={item.productName}
              className="w-full sm:w-40 md:w-48 h-auto object-cover rounded-lg border border-gray-300 mb-4 sm:mb-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">{item.productName}</p>
              <p className="text-base sm:text-lg md:text-xl text-blue-500 mt-1 font-semibold">₹{item.productPrice}</p>
            </div>
          </div>
          <button
            onClick={() => removeProduct(cartIndex)}
            className="mt-4 bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 transition duration-200 w-full sm:w-auto"
          >
            Remove Product
          </button>

          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-gray-800">Selected Accessories</h2>
            {item.selectedAccessories && item.selectedAccessories.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {item.selectedAccessories.map((accessory) => (
                  <div
                    key={accessory._id}
                    className="bg-gray-100 rounded-xl p-4 border border-gray-200 shadow-md flex flex-col items-center space-y-2"
                  >
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-md border border-gray-300"
                    />
                    <div className="text-center">
                      <p className="font-medium text-sm sm:text-base md:text-lg text-gray-800">{accessory.name}</p>
                      <p className="text-xs sm:text-sm md:text-base text-blue-500 font-semibold">₹{accessory.price}</p>
                    </div>
                    <button
                      onClick={() => removeAccessory(cartIndex, accessory._id)}
                      className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-200 mt-2 w-full sm:w-auto"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm sm:text-base">No accessories selected.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;