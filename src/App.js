import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Collections from './Components/Collections';
import Women from './Components/Women';
import Men from './Components/Men';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  const addToCart = () => {
    setCart(count);
    setCount(0);
  }

      return (
        <div className='app'>
          <Navigation cart={cart} />
          <Routes>
            <Route path="/" element={<Collections 
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement} count={count} onAdd={addToCart} />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
      );

}

export default App;
