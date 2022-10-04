import React from "react";
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Home from './components/Home'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (

    <>
      <HeaderMobile />
      <Header />
      <Home />
    </>

  )
}

export default App;
