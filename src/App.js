
import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Footer from './components/Footer';
import FetchData from './components/FetchData';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/general' element={<FetchData cat="general"/>}></Route>
        <Route  path='/business' element={<FetchData cat="business"/>}></Route>
        <Route  path='/entertainment' element={<FetchData cat="entertainment"/>}></Route>
        <Route  path='/health' element={<FetchData cat="health"/>}></Route>
        <Route  path='/science' element={<FetchData cat="science"/>}></Route>
        <Route  path='/sports' element={<FetchData cat="sports"/>}></Route>
        <Route  path='/technology' element={<FetchData cat="technology"/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
