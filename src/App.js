import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Screens/Home"
import Order from './Screens/Order';

const App = () => (
  <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/order' element={<Order/>} />
    </Routes>
  </Router>
)

export default App;