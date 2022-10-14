import React from "react";
import Header from './components/Header/Header'
import HeaderMobile from './components/HeaderMobile/HeaderMobile'
import Home from './Home'
import Monitores from './Monitores'
import Processadores from './Processadores'
import Placa from './Placa'
import Memoria from "./Memoria"
import Armazenamento from "./Armazenamento"


import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Armazenamento from "./Armazenamento";


const App = () => {
  return (

    <BrowserRouter>
      <HeaderMobile />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='monitores' element={<Monitores/>}/>
        <Route path='processadores' element={<Processadores/>}/>
        <Route path='placas' element={<Placa/>}/>
        <Route path='memoria' element={<Memoria/>}/>
        <Route path='armazenamento' element={<Armazenamento/>}/>
        
      </Routes>
    </BrowserRouter>

  )
}

export default App;
