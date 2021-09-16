import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import SingleProduct from './views/SingleProduct';
import Edit from './views/Edit';
import Create from './views/Create';
import AllProducts from './views/AllProducts';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/products/new">Add new product</Link> &nbsp;
      <Link to="/">All Products</Link>
      <Switch>
        <Route exact path="/">
          <AllProducts />
        </Route>

        <Route exact path="/products/new">
          <Create />
        </Route>

        <Route exact path="/products/:_id">
          <SingleProduct />
        </Route>

        <Route exact path="/products/:_id/edit">
          <Edit />
        </Route>
      </Switch>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
