import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Container/navbar/Navbar';
import Landingpage from './Components/Landingpage';
import Aboutus from './Components/Aboutus';
import Shop from './Components/Shop';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Cart from './Components/Cart';

const AppRoutes = ({ cart, addToCart, removeFromCart, removeFromCartsubtract, isAuthenticated, loading }) => {
  const location = useLocation();
  const hideNavbar = ['/signup', '/loginsignup'].includes(location.pathname);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!hideNavbar && <Navbar cart={cart} />}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/shop' element={<Shop addToCart={addToCart} />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} removeFromCartsubtract={removeFromCartsubtract} />} />
      </Routes>
    </>
  );
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false); // No need for authentication logic now

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  const removeFromCartsubtract = (productId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);

    setCart(updatedCart);
  };

  return (
    <div>
      <BrowserRouter>
        <AppRoutes
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeFromCartsubtract={removeFromCartsubtract}
          loading={loading}
        />
      </BrowserRouter>
    </div>
  );
}
