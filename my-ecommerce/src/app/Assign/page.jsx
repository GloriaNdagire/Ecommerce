"use client";

import React, {useState} from "react";

const assign =() => {

  const [category, setCategory] = useState("Phones"); 

   const handleCategoryClick = (e, name) => {
    e.preventDefault(); 
    setCategory(name);
   };

           const data = {
            Phones: [
              "/img/img1.jpg",
              "/img/img2.jpg",
              "/img/img3.jpg",
              "/img/img4.jpg",
              "/img/img1.jpg",
              "/img/img2.jpg",
            ],
            fashion: [
              "/img/img1.jpg",
              "/img/img1.jpg",
              "/img/img1.jpg",
              "/img/img1.jpg",
              "/img/img1.jpg",
              "/img/img1.jpg",
            ],
            shoes: [
              "/img/img2.jpg",
              "/img/img2.jpg",
              "/img/img2.jpg",
              "/img/img2.jpg",
              "/img/img2.jpg",
              "/img/img2.jpg",
            ],
            accessories: [
              "/img/img10.jpg",
              "/img/img10.jpg",
              "/img/img10.jpg",
              "/img/img10.jpg",
              "/img/img10.jpg",
              "/img/img10.jpg",
              "/img/img10.jpg",
            ]
           };

     return (
        
            <div>
               
                <div className="flex justify-between bg-gray-100 fixed top-0 left-0 z-50 shadow-md w-full">
                  
                  <div >
                    <img src="./img/logo.png" className="w-1/9"></img>
                  </div>
                  <div className="sm:justify-center md:justify-end flex">
                    <a href="/" className="text-semibold text-xl text-pink-900 bg-gray-300 hover:bg-gray-500 rounded m-3 mb-8 ">Log In</a>
                  </div>
                </div>
                 

        <div className="flex">
            <div className=" bg-gray-300 w-1/5 pb-25 shadow-md rounded-10 mt-20">
              <span className="flex flex-col m-1 mb-1">
                <a href="" className="mt-20 border-b border-gray-100" id="phones" onClick={(e) => handleCategoryClick(e, "Phones")}>Phones</a>
                <a href="" className="mt-35 border-b border-gray-100" id="fashion" onClick={(e) => handleCategoryClick(e, "fashion")}>Fashion</a>
                <a href="" className="mt-35 border-b border-gray-100" id="shoes" onClick={(e) => handleCategoryClick(e, "shoes")}>Shoes</a>
                <a href="" className="mt-35 border-b border-gray-100" id="accesories" onClick={(e) => handleCategoryClick(e, "accessories")}>Accessories</a>
              </span>
            </div>


            

            {/* Render images dynamically based on selected category */}
            <div className="flex flex-wrap ml-20 mt-15">
              {data[category] && data[category].map((imgSrc, idx) => (
                <div key={idx} className="bg-gray-300 shadow-md w-[290px] h-[300px] m-10 p-3">
                  <img src={imgSrc} alt={category + idx} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>





        </div>
             <div className="p-10 bg-gray-200 text-purple-900  mt-5">
                <footer className="items-center">
                    <a href=""></a>
                    <div>
              <h5>
                     <a href="/" className="fa fa-home"></a>
                     <i className="fab fa-instagram"></i>
                     <i className="fab fa-facebook-f"></i> 
                     <i className="fa fa-twitter"></i> 
                     <i className="fa fa-linkedin"></i> 
              </h5>
                    </div>
                     <p className="items-center">&copy; 2025 MarketPlace. All rights reserved.</p>
                </footer>
             </div>
            </div>


        

     )
}
 export default assign;