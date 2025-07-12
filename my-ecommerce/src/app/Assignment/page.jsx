import React from "react";

const assignment =() => {
     return (
        <div>
            <body>
               
                <div className="flex justify-between bg-gray-100 ">
                  
                  <div >
                    <img src="./img/logo.png" className="w-1/9"></img>
                  </div>
                  <div className="sm:justify-center md:justify-end flex">
                    <a href="/" className="text-semibold text-xl text-pink-900 bg-gray-300 hover:bg-gray-500 rounded m-3 mb-8 ">Log In</a>
                  </div>
                </div>
                 

        <div className="flex">
            <div className=" bg-gray-300 w-1/5 pb-25 shadow-md rounded-10 mt-3">
              <span className="flex flex-col m-1 mb-1">
                <a href="" className="mt-10 border-b border-gray-100" id="phones">Phones</a>
                <a href=""className="mt-20 border-b border-gray-100">Fashion</a>
                <a href="" className="mt-20 border-b border-gray-100">Shoes</a>
                <a href="" className="mt-20 border-b border-gray-100">Accessories</a>
              </span>
            </div>
             

          <div className="flex justify center ml-5">
             <div className="bg-gray-600 shadow-md w-(100px) h-(200px) m-3 p-5">P</div>
             <div className="bg-gray-600 shadow-md w-(100px) h-(200px) m-10 p-5">P</div>
             <div className="bg-gray-600 shadow-md w-(100px) h-(200px) m-10 p-5">P</div>
          </div>

        </div>


             <div className="p-10 bg-gray-200 text-purple-900  mt-10">
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
            </body>
<script>
          
</script>
        </div>

     )
}
 export default assignment;