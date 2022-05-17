import { Toolbar } from "@mui/material";
import { Link } from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navmain">
      {/* <div className='topNav'>
          <div>
           <button type="submit"><i class="fa fa-search"></i></button>
           </div>
           <div>
                <h6>CORAL</h6>
           </div>
           <div className='d-flex'>
                <h6>Account</h6>
                <h6>Shopping</h6>
           </div>
          </div> */}
      <div className="d-flex menu">
        <span className="search">
          <button type="submit" className="button">
            <i class="fa fa-search"></i>
          </button>
        </span>
        <span className="coral"> CORAL</span>
        <div  className="d-flex"><p className="me-3 my-auto">Account</p> <p className="shopping my-auto">Shopping</p></div>
      </div>

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Jwellery & Accessories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Clothing & Shoes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Home & Living
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Wedding & Party
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Toys & Entertainment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Art & Collectibles
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
                  Craft Supplies & Tools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <AppBar>
         <Toolbar>
         <Link href="#" color="inherit">   Jwellery & Accessories</Link>
         <Link href="#"  color="inherit">  Clothing & Shoes</Link>
         <Link href="#"  color="inherit">  Home & Living</Link>
         <Link href="#"  color="inherit">  Wedding & Party</Link>
         <Link href="#"  color="inherit">  Toys & Entertainment</Link>
         <Link href="#"  color="inherit">  Art & Collectibles</Link>
         <Link href="#"  color="inherit"> Craft Supplies & Tools</Link>
         </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default Navbar;
