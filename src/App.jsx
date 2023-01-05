import React from "react";
import Header from './components/Header/Header'
import HeaderMobile from './components/HeaderMobile/HeaderMobile'
import Home from './pages/Home/Home'
import Monitores from './pages/Monitores/Monitores'
import Processadores from './pages/Processadores/Processadores'
import Placa from './pages/Placa/Placa'
import Memoria from "./pages/Memoria/Memoria"
import Armazenamento from "./pages/Armazenamento/Armazenamento"
import Footer from "./components/Footer/Footer"
import Login from '../src/pages/Login/Login';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from "./pages/NotFound/NotFound";


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
        <Route path='login' element={<Login/>}/>
        <Route path='404' element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App;
