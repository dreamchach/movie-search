import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} errorElement={<NotFound />} />
      <Route path='/main' element={<Main />} errorElement={<NotFound />} />
      <Route path='/search' element={<Search />} errorElement={<NotFound />} />
      <Route path='/detail/:detail' element={<Detail />} errorElement={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;