


// import React from 'react';
// import { Link } from 'react-router-dom';
// import bannerimg from '../assets/images/buysmart1.png'
// import style1 from '../assets/images/style1.jpg';
// import style3 from '../assets/images/style3.jpg';
// import style4 from '../assets/images/style4.jpg';
// import style6 from '../assets/images/style6.jpg';
// import aboutstyle2 from '../assets/images/aboutstyle2.jpg';

// function Home() {
//   return (
//     <div className="flex flex-col items-center w-full">
//   {/* Full-Width Responsive Banner Image */}
 
//   {/* Full-Width Ultra-Responsive Banner Image */}
//   <div className="w-full h-[30vh] xs:h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[85vh] 3xl:h-[90vh] mb-8 relative mt-36">
//   <img
//     src={bannerimg}
//     alt="Main Banner"
//     className="w-full h-full object-cover rounded-lg shadow-lg"
//   />
// </div>





// {/* Banner Images Section */}
// <div className="w-full flex flex-wrap justify-center gap-6 p-6 md:p-10 lg:p-14 hover:cursor-pointer">
//   {/* Women Banner */}
//   <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out group">
//     {/* Darker Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-all duration-500" />
//     <img 
//       src="https://i.pinimg.com/originals/68/c5/a1/68c5a123dc6e2130a2e16569059298d0.jpg" 
//       alt="Women" 
//       className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
//     />
//     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
//       <Link to="/women">
//         <button className="bg-[#C99780] text-white py-3 px-6 rounded-lg shadow-lg transform hover:bg-[#f0cab8] hover:scale-110 transition-all duration-300 ease-in-out">
//           Explore Women
//         </button>
//       </Link>
//     </div>
//   </div>

//   {/* Men Banner */}
//   <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out group">
//     {/* Darker Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-all duration-500" />
//     <img 
//       src="https://i.pinimg.com/474x/47/db/69/47db69a37d01f057cc3804341349fb78.jpg" 
//       alt="Men" 
//       className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
//     />
//     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
//       <Link to="/men">
//         <button className="bg-[#C99780] text-white py-3 px-6 rounded-lg shadow-lg transform hover:bg-[#f0cab8] hover:scale-110 transition-all duration-300 ease-in-out">
//           Explore Men
//         </button>
//       </Link>
//     </div>
//   </div>
// </div>



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
import bannerimg from '../assets/images/buysmart1.png';
import style1 from '../assets/images/style1.jpg';
import style3 from '../assets/images/style3.jpg';
import style4 from '../assets/images/style4.jpg';
import style6 from '../assets/images/style6.jpg';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Full-Width Responsive Banner Image */}
      <div className="w-full h-[30vh] xs:h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[119vh] 2xl:h-[85vh] 3xl:h-[90vh] mb-8 relative mt-36">
        <img
          src={bannerimg}
          alt="Main Banner"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Banner Images Section */}
      <div className="w-full  bg-[#C99780] flex flex-wrap justify-center gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 hover:cursor-pointer">
        {/* Women Banner */}
        <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-all duration-500" />
          <img 
            src={img1}
            alt="Women" 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
            <Link to="/women">
              <button className="bg-[#C99780] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg transform hover:bg-[#f0cab8] hover:scale-110 transition-all duration-300 ease-in-out">
                Explore Women
              </button>
            </Link>
          </div>
        </div>

        {/* Men Banner */}
        <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-all duration-500" />
          <img 
            src={img2}
            alt="Men" 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
            <Link to="/men">
              <button className="bg-[#C99780] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg transform hover:bg-[#f0cab8] hover:scale-110 transition-all duration-300 ease-in-out">
                Explore Men
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="p-4 w-full ">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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


