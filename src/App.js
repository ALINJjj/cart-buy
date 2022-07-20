import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ADS from './Component/ADS';
import Header from './Component/Header';


const App = () => (
  <Router>
    <Routes>
      <Route  path="/" element={<>
        <Header/>
        <ADS/>
      </>}/>
    </Routes>
  </Router>
)

export default App;