import React from "react";

const Shoes = () => {
    return(
        <body class="text-gray-600 font-mono">

  <div>
    <div>
      <nav>
        <div>
          <h1 class="font-bold uppercase p-4 border-b border-gray-100 ">
            <a href="/">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li class="text-gray-700 font-bold">
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    <main class="px-16 py-6">
      <div class="flex justify-end ">
        <a href="#" class="text-red-600 bg-brown-100">Log in</a>
        <a href="#" class="text-red-600 ml-2">Sign up</a>
      </div>

      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 class="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>
  
        <div class="mt-8">


            .
          <div> 
            <img src="img/img2.jpg" alt="stew" class="w-1/2"></img>
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

        <div class="mt-8">

    .
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-gray-200 text-black-200" >Load more</div>
      </div>    
    </main>
  </div>


</body>
       
    )
}

export default Shoes;