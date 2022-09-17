import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from '../layout/Navber';
import About from '../page/About';
import Contact from '../page/Contact';
import Error from '../page/Error';
import Home from '../page/Home';
import Proted from '../page/Proted';
import Access from './Access';

function routing() {
  return (
    <BrowserRouter>
    <Navber />
        <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='/about' element={<About/>} /> */}
            <Route path='/contact' element={<Contact/>} />
            <Route path='/proted' element={<Access>
              <Proted />
            </Access>} />
            <Route path='/about/:name' element={<About/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routing