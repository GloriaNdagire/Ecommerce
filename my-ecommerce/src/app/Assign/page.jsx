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
              "/img/img4.jpg",
              "/img/img1.jpg",
              "/img/img2.jpg",
            ],
            shoes: [
              "/img/img2.1.jpg",
              "/img/img2.2.jpg",
              "/img/img2.3.jpg",
              "/img/img2.4.jpg",
              "/img/img2.2.jpg",
              "/img/img2.1.jpg",
            ],
            accessories: [
              "/img/img4.jpg",
              "/img/img4.jpg",
              "/img/img4.jpg",
              "/img/img4.jpg",
              "/img/img4.jpg",
              "/img/img4.jpg",
         
            ]
           };
           {/*
           if setCategory() === (("Phones") => {
                   
})
 */}
     return (
        
            <div className="bg-[#D1EAFO]">
               
                <div className="flex justify-between bg-gray-100 fixed top-0 left-0 z-50 shadow-md w-full">
                  
                  <div >
                    <img src="./img/logo4.png" className="w-1/4 "></img>
                  </div>
                  <div className="text-white items-center sm:justify-center md:justify-end flex bg-gray-300 rounded m-9 pl-8 pr-8 mr-10 transition duration-300 ease-in-out hover:bg-gray-800  transform hover:scale-110">
                    <a href="" className="text-semibold text-xl ">LOG IN</a>
                  </div>
                </div>
                 

        <div className="flex overflow-y-auto">
            <div className=" bg-gray-300 w-1/5 pb-25 shadow-md rounded-10 mt-34">
              <span className="flex flex-col m-1 mb-1">
                <a href="" className="mt-20 border-b border-gray-100" id="phones" onClick={(e) => handleCategoryClick(e, "Phones")}>Phones</a>
                <a href="" className="mt-35 border-b border-gray-100" id="fashion" onClick={(e) => handleCategoryClick(e, "fashion")}>Fashion</a>
                <a href="" className="mt-35 border-b border-gray-100" id="shoes" onClick={(e) => handleCategoryClick(e, "shoes")}>Shoes</a>
                <a href="" className="mt-35 border-b border-gray-100" id="accesories" onClick={(e) => handleCategoryClick(e, "accessories")}>Accessories</a>
              </span>
            </div>


            

            {/* Render images dynamically based on selected category */}
            <div className="flex flex-wrap ml-18 mt-25">
              {data[category] && data[category].map((imgSrc, idx) => (
                <div key={idx} className="bg-gray-300 shadow-md w-[290px] h-[300px] m-10 p-3 rounded transition ease-in-out duration-200 transform hover:scale-110">
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