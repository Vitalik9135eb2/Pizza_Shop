import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FullPizza from './component/fullPizza/fullPizza';

import Header from './component/header/header';
import Cart from './pages/cart/cart';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';

import './scss/app.scss';



const App = () => {

  return (


      <div className="wrapper">
        
        <Header />

        <div className="content">
          <div className="container">

            <Routes>


              <Route path='/' element={<Home />} />
              <Route path='/chart' element={<Cart/>} />
              <Route path='/pizza/:id' element={<FullPizza/>} />

              <Route path='*' element={<NotFound />} />
            </Routes>


          </div>
        </div>
      </div>

  );
}

export default App;
