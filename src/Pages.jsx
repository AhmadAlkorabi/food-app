import React from 'react'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Info from './components/Info'; 
const pages = (props) => {
  return (
        <Routes>
      <Route path='/food-app' element={<Home/> } />
      <Route path='/search/:name' element={<Cards/>} />
      <Route path='/Info/:name' element={ <Info/>} />
        </Routes>
  )
}

export default pages