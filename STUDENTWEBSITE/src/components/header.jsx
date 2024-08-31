import React from "react";

 function Header()
{

    return(
  
      <nav class = "navbar bg-warning navbar-expand-lg sticky-top ">
     
      <div class=" collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        
        <ul class="nav">
          <li class="nav-item " >
            <a href="#Home" class="nav-link">HOME</a>
          </li>
          <li class="nav-item " >
            <a href="#myworks" class="nav-link">MY WORKS</a>
          </li>
          <li class="nav-item">
            <a href="#aboutme" class="nav-link">ABOUT ME</a>
          </li>
          <li class="nav-item">
            <a href="#Contact" class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  
  

    );
}

export default Header;