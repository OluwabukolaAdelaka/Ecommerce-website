import React from 'react';
import Navigation from './Components/Navigation';
import {Routes, Route} from 'react-router-dom';
import Collections from './Components/Collections';
import Women from './Components/Women';
import Men from './Components/Men';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {

      return (
        <div className='app'>
          <Navigation/>
          <Routes>
            <Route path="/collections" element={<Collections />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      );

}

export default App;
