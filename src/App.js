import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Component/Header';


const App = () => (
  <Router>
    <Routes>
      <Route  path="/" element={<Header/>}/>
    </Routes>
  </Router>
)

export default App;