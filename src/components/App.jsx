import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Gallery from '../pages/Gallery';
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import Home from '../pages/Home';
import Header from './Header';


function App() {
  return (
    <Router>
        <Header />
        
        <div className="main grid">
          <div className="container">
            <Switch>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div> 
      </Router>
  )
}

export default App;