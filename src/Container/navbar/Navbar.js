import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Changed from Link to NavLink
import Logo from "../Images/NavbarLogo.png";
import used from "../Images/Admin.png";
import addto from "../Images/Add to Cart.png";
import './Navbar.css';

export default function Navbar({ cart }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    
    // Redirect to the login page
    navigate('/loginsignup');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg back-groundd">
        <div className="container d-flex justify-content-between div1">
          <NavLink className="" to="/">
            <img src={Logo} className="logoImg" alt="Logo" />
          </NavLink>
          <div className='d-flex navbaricon'>
            <li className="nav-item mauto1">
              <NavLink className="nav-link" to="/cart">
                {cart.length > 0 && (
                  <span className="text-xs cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
                <img src={addto} style={{ width: "40px", height: "40px" }} alt="Cart" />
              </NavLink>
            </li>
            <li className="nav-item mauto1">
              {/* Logout icon with the onClick handler */}
              {/* <img 
                src={used} 
                style={{ width: "40px", height: "40px", cursor: "pointer" }} 
                alt="Logout" 
                onClick={handleLogout}
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "30px", height: "30px", cursor: "pointer",marginTop:"6px" }} 
                alt="Logout" 
                onClick={handleLogout}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
            </li>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 navbaricon">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/aboutus">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/shop">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className='d-flex me-5'>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to="/cart">
                  {cart.length > 0 && (
                    <span className="text-xs cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                    </span>
                  )}
                  <img src={addto} className='' style={{ width: "40px", height: "40px" }} alt="Cart" />
                </NavLink>
              </li>
              <li className="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "30px", height: "30px", cursor: "pointer", marginTop:"6px" }} 
                alt="Logout" 
                onClick={handleLogout}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
       
              </li>
            </div>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <img src={Logo} className="logoImg" alt="Logo" />
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/"><b>Home</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/aboutus"><b>About us</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/shop"><b>Shop</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/services"><b>Services</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/blog"><b>Blog</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/contact"><b>Contact</b></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
