// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="space-x-8">
//         <Link to="/women">
//           <button className="bg-pink-500 text-white py-2 px-4 rounded">Women</button>
//         </Link>
//         <Link to="/men">
//           <button className="bg-blue-500 text-white py-2 px-4 rounded">Men</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="flex flex-col items-center">
//       {/* Full-Width Banner Image */}
//       <div className="w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[80vh] mb-8 relative">
//         <img
//           src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
//           alt="Main Banner"
//           className="w-full h-full object-cover rounded-lg shadow-lg"
//         />
//         <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
//           <button className="bg-gray-900 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full shadow-2xl hover:scale-105 transition-all ease-in-out duration-300">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Banner Images Section */}
//       <div className="w-full flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 px-2 sm:px-4">
//         {/* Women Banner */}
//         <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img
//             src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
//             alt="Women"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/women">
//               <button className="bg-pink-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Explore Women
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Men Banner */}
//         <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img
//             src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
//             alt="Men"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/men">
//               <button className="bg-blue-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Explore Men
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="bg-gray-100 w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-12">
//         <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-4 sm:mb-6">
//           About Us
//         </h2>
//         <div className="flex flex-col xs:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
//           <div className="text-sm xs:text-base sm:text-lg text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             <p className="mb-4 sm:mb-6">
//               We are a leading fashion brand offering the latest styles and trends for both men and women. Our mission is to provide high-quality clothing that combines comfort, style, and affordability.
//             </p>
//             <p className="mb-4 sm:mb-6">
//               What makes us different is our personalized shopping experience. After selecting an outfit, our recommendation engine will suggest perfect accessories like earrings, shoes, ties, and jackets to complete your look.
//             </p>
//             <p>
//               Enjoy a seamless integration of clothing and accessories and save time while ensuring you always look your best.
//             </p>
//           </div>
//           <div className="w-full xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-all duration-300">
//             <img
//               src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Fashion Accessories"
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Additional Images Section */}
//       <div className="p-3 xs:p-4 sm:p-6 md:p-8 w-full">
//         <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="w-full h-auto object-cover rounded-md" />
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="w-full h-auto object-cover rounded-md" />
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" className="w-full h-auto object-cover rounded-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import style1 from '../assets/images/style1.jpg'
// import style3 from '../assets/images/style3.jpg'
// import style4 from '../assets/images/style4.jpg'
// import style6 from '../assets/images/style6.jpg'

// import aboutstyle2 from "../assets/images/aboutstyle2.jpg"

// function Home() {
//   return (
//     <div className="flex flex-col items-center">
//       {/* Full-Width Banner Image */}
//       <section className="relative bg-gradient-to-r bg-[#3da5d9] text-white h-[600px] flex items-center justify-center overflow-hidden">
//   <div className="absolute inset-0 opacity-60 bg-gradient-to-br bg-[#9fb6c3]"></div> {/* Overlay */}
  
//   <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
//     <svg
//       viewBox="0 0 1440 320"
//       className="absolute bottom-0 transform translate-y-1/2"
//     >
//       <path
//         fill="rgba(255, 255, 255, 0.1)"
//         d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,101.3C672,75,768,53,864,48C960,43,1056,53,1152,64C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//       ></path>
//     </svg>
//   </div>

//   <div className="container mx-auto px-4 text-center relative z-10 space-y-6">
//     <h1 className="text-3xl md:text-5xl font-extrabold leading-tight ">
//     For every outfit,  <span className="text-[#093a3e]">there’s a perfect pairing. </span> Style it right, <span className="text-[#093a3e]">accessorize it beautifully</span> 
//     </h1>
//     <p className="text-lg md:text-xl font-light max-w-lg mx-auto">
//     Welcome to a personalized fashion experience! At BuySmart, we believe every outfit tells a story, and the right accessories can elevate that story to new heights. Our unique Outfit Accessory Selector takes the guesswork out of styling by suggesting complementary accessories for each outfit you choose.
//     </p>
    
//     <div className="space-x-4">
//       <button className="bg-gradient-to-br bg-[#3B429F] text-white py-2 md:py-4 px-4 md:px-8 rounded-full shadow-lg transform transition-transform hover:scale-110">
//         <i className="fas fa-upload mr-2"></i> {/* Upload Icon */}
//         Shop Now
//       </button>
    
//     </div>
    
    
//   </div>
// </section>


//       {/* Banner Images Section */}
//       <div className="w-full flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 px-2 sm:px-4">
//         {/* Women Banner */}
//         <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img
//             src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
//             alt="Women"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/women">
//               <button className="bg-pink-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Explore Women
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Men Banner */}
//         <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img
//             src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
//             alt="Men"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/men">
//               <button className="bg-blue-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Explore Men
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="bg-white w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-12 font-serif">
//         <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900 mb-4 sm:mb-6 lg:mb-8">
//           About Us
//         </h2>
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
//           <div className="text-sm xs:text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             <p className="mb-4 sm:mb-6 lg:mb-8">
//               We are a leading fashion brand offering the latest styles and trends for both men and women. Our mission is to provide high-quality clothing that combines comfort, style, and affordability.
//             </p>
//             <p className="mb-4 sm:mb-6 lg:mb-8">
//               What makes us different is our personalized shopping experience. After selecting an outfit, our recommendation engine will suggest perfect accessories like earrings, shoes, ties, and jackets to complete your look.
//             </p>
//             <p>
//               Enjoy a seamless integration of clothing and accessories and save time while ensuring you always look your best.
//             </p>
//           </div>
//           <div className="w-full xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-all duration-300">
//             <img
//               src={aboutstyle2}
//               alt="Fashion Accessories"
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Additional Images Section */}
//       <div className="p-3 xs:p-4 sm:p-6 md:p-8 w-full">
//         <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
//           <img src={style1} alt="Image 1" className="w-full h-auto object-cover rounded-md" />
//           <img src={style3} alt="Image 2" className="w-full h-auto object-cover rounded-md" />
//           <img src={style4} alt="Image 3" className="w-full h-auto object-cover rounded-md" />
//           <img src={style6} alt="Image 4" className="w-full h-auto object-cover rounded-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import style1 from '../assets/images/style1.jpg';
// import style3 from '../assets/images/style3.jpg';
// import style4 from '../assets/images/style4.jpg';
// import style6 from '../assets/images/style6.jpg';
// import aboutstyle2 from '../assets/images/aboutstyle2.jpg';

// function Home() {
//   return (
//     <div className="flex flex-col items-center w-full">
//       {/* Full-Width Banner Image */}
//       <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-r from-[#3da5d9] to-[#093a3e] text-white flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-[#9fb6c3] to-[#3B429F]"></div> {/* Overlay */}
//         <div className="container mx-auto px-4 text-center relative z-10 space-y-6">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
//             For every outfit, <span className="text-[#093a3e]">there’s a perfect pairing.</span> Style it right, <span className="text-[#093a3e]">accessorize it beautifully</span>
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-lg mx-auto mb-7">
//             Welcome to a personalized fashion experience! At BuySmart, we believe every outfit tells a story, and the right accessories can elevate that story to new heights.
//           </p>
//           <button className="bg-[#3B429F] text-white py-2 px-4 sm:px-6 lg:px-10 rounded-full shadow-lg hover:scale-105 transition-transform">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Banner Images Section */}
//       <div className="w-full flex flex-wrap justify-center gap-4 p-4">
//         {/* Women Banner */}
//         <div className="relative w-full sm:w-1/2 lg:w-1/3 h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img src="https://i.pinimg.com/originals/68/c5/a1/68c5a123dc6e2130a2e16569059298d0.jpg" alt="Women" className="w-full h-full object-cover" />
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/women">
//               <button className="bg-pink-600 text-white py-2 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
//                 Explore Women
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Men Banner */}
//         <div className="relative w-full sm:w-1/2 lg:w-1/3 h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC89d9VERn4w7hKL--o_m_VA1lXOSz8fR5bg&s" alt="Men" className="w-full h-full object-cover" />
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/men">
//               <button className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
//                 Explore Men
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="bg-white w-full py-12 px-4 sm:px-6 md:px-12 font-serif text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
//           About Us
//         </h2>
//         <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
//           We are a leading fashion brand offering the latest styles and trends for both men and women. Our mission is to provide high-quality clothing that combines comfort, style, and affordability.
//         </p>
//         <div className="w-full sm:w-1/2 md:w-1/3 mx-auto mt-8 transform hover:scale-105 transition-all duration-300">
//           <img src={aboutstyle2} alt="Fashion Accessories" className="w-full h-auto object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>

//       {/* Additional Images Section */}
//       <div className="p-4 w-full">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           <img src={style1} alt="Image 1" className="w-full h-auto object-cover rounded-md" />
//           <img src={style3} alt="Image 2" className="w-full h-auto object-cover rounded-md" />
//           <img src={style4} alt="Image 3" className="w-full h-auto object-cover rounded-md" />
//           <img src={style6} alt="Image 4" className="w-full h-auto object-cover rounded-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import style1 from '../assets/images/style1.jpg';
import style3 from '../assets/images/style3.jpg';
import style4 from '../assets/images/style4.jpg';
import style6 from '../assets/images/style6.jpg';
import aboutstyle2 from '../assets/images/aboutstyle2.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Full-Width Banner Image */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-white text-[#2d3b3d] flex items-center justify-center overflow-hidden font-signature">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-[#FA879C] to-[#858be5] animate-pulse" />
  
  <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center relative z-10 space-y-6 flex flex-col sm:flex-row items-center justify-between">
    <div className="sm:w-1/2 text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide text-[#1d3f45] mb-4 sm:mb-6">
        For every outfit, <span className="text-[#2c6b6f]  px-2 rounded-md">there’s a perfect pairing.</span> 
        Style it right, <span className="text-[#2c6b6f]  px-2 rounded-md">accessorize it beautifully</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto mb-6 leading-relaxed text-[#3b4f4e]">
        Welcome to a personalized fashion experience! At BuySmart, we believe every outfit tells a story, and the right accessories can elevate that story to new heights.
      </p>
      <button className="bg-[#2c6b6f] text-white py-2 px-6 sm:px-8 lg:px-10 rounded-full shadow-lg hover:bg-[#1e4a47] hover:scale-105 transition-transform duration-300 ease-in-out">
        Shop Now
      </button>
    </div>

  
 


    {/* Image on the right side */}
    <div className="sm:w-1/2 mt-6 sm:mt-0">
      <img 
        src="https://www.collegefashion.net/wp-content/uploads/2019/01/class-presentation-outfit-2.jpg"
        alt="Fashion Accessories" 
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

{/* Banner Images Section */}
<div className="w-full flex flex-wrap justify-center gap-6 p-6 md:p-10 lg:p-14 hover:cursor-pointer">
  {/* Women Banner */}
  <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out group">
    {/* Darker Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-all duration-500" />
    <img 
      src="https://i.pinimg.com/originals/68/c5/a1/68c5a123dc6e2130a2e16569059298d0.jpg" 
      alt="Women" 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
    />
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
      <Link to="/women">
        <button className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:bg-pink-700 hover:scale-110 transition-all duration-300 ease-in-out">
          Explore Women
        </button>
      </Link>
    </div>
  </div>

  {/* Men Banner */}
  <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out group">
    {/* Darker Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-all duration-500" />
    <img 
      src="https://i.pinimg.com/474x/47/db/69/47db69a37d01f057cc3804341349fb78.jpg" 
      alt="Men" 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
    />
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
      <Link to="/men">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:bg-blue-700 hover:scale-110 transition-all duration-300 ease-in-out">
          Explore Men
        </button>
      </Link>
    </div>
  </div>
</div>



      {/* Additional Images Section */}
      <div className="p-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img src={style1} alt="Image 1" className="w-full h-auto object-cover rounded-md" />
          <img src={style3} alt="Image 2" className="w-full h-auto object-cover rounded-md" />
          <img src={style4} alt="Image 3" className="w-full h-auto object-cover rounded-md" />
          <img src={style6} alt="Image 4" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Home;

