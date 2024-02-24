
import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Stocks from "./components/Stock"
import { BrowserRouter,Routes,Route } from "react-router-dom";

class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="input-group mb-3">
        <input type="text" clasName="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/stocks' element={<Stocks />}></Route>
        </Routes>
        </BrowserRouter>
          </div>
          
        
          
          </div>
  );
}}

export default App;
