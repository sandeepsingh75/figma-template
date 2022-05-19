import React from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: '#F1F1F1'}}>
        <Toolbar>
          <Tabs>
           <tab sx={{}}>   <SearchIcon sx={{color:'black'}} /></tab>

            
            <Tab sx={{margin:'auto', color:'black'}} label="CORAL" />
           
          </Tabs>
        <Button sx={{color:'black' , marginLeft:'auto'}} variant="text"><PersonIcon/> Account</Button>
        <Button sx={{color:'black', marginRight:"0"}} variant="text"><ShoppingBagIcon /> Shopping</Button>
        
        </Toolbar>
        <Toolbar>
          {/* <Typography>Shope</Typography> */}
          <Tabs  >
            <Tab sx={{color:'#000000'}} label="Jwellery & Accessories" />
            <Tab  sx={{color:'#000000'}} label=" Clothing & Shoes" />
            <Tab  sx={{color:'#000000'}} label=" Home & Living" />
            <Tab  sx={{color:'#000000'}} label=" Wedding & Party" />
            <Tab  sx={{color:'#000000'}} label=" Toys & Entertainment" />
            <Tab  sx={{color:'#000000'}} label=" Art & Collectibles" />
            <Tab  sx={{color:'#000000'}} label="Craft Supplies & Tools" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

// import { Toolbar } from "@mui/material";
// import { Link } from "@mui/material";
// import { AppBar } from "@mui/material";
// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navmain">
//       {/* <div className='topNav'>
//           <div>
//            <button type="submit"><i class="fa fa-search"></i></button>
//            </div>
//            <div>
//                 <h6>CORAL</h6>
//            </div>
//            <div className='d-flex'>
//                 <h6>Account</h6>
//                 <h6>Shopping</h6>
//            </div>
//           </div> */}
//       <div className="d-flex menu">
//         <span className="search">
//           <button type="submit" className="button">
//             <i class="fa fa-search"></i>
//           </button>
//         </span>
//         <span className="coral"> CORAL</span>
//         <div  className="d-flex"><p className="me-3 my-auto">Account</p> <p className="shopping my-auto">Shopping</p></div>
//       </div>

//       <nav class="navbar navbar-expand-lg bg-light">
//         <div class="container-fluid">
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse " id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Jwellery & Accessories
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Clothing & Shoes
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Home & Living
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Wedding & Party
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Toys & Entertainment
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Art & Collectibles
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active text-dark fw-bold" aria-current="page" href="#">
//                   Craft Supplies & Tools
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* <AppBar>
//          <Toolbar>
//          <Link href="#" color="inherit">   Jwellery & Accessories</Link>
//          <Link href="#"  color="inherit">  Clothing & Shoes</Link>
//          <Link href="#"  color="inherit">  Home & Living</Link>
//          <Link href="#"  color="inherit">  Wedding & Party</Link>
//          <Link href="#"  color="inherit">  Toys & Entertainment</Link>
//          <Link href="#"  color="inherit">  Art & Collectibles</Link>
//          <Link href="#"  color="inherit"> Craft Supplies & Tools</Link>
//          </Toolbar>
//       </AppBar> */}
//     </div>
//   );
// };

// export default Navbar;
