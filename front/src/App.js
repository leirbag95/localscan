import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Block from './pages/Block';

const App = () => {

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/block/:blockNumber" element={<Block />} />
    </Routes>
  );
};

export default App;
