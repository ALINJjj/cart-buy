import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Screen/Home"
import Order from './Screen/Order';

const App = () => (
  <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/order' element={<Order/>} />
    </Routes>
  </Router>
)

export default App;