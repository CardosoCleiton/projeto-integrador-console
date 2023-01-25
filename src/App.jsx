import React from "react";
//Components
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import HeaderMobile from './components/HeaderMobile/HeaderMobile'
//Paginas
import Home from './pages/Home/Home'
import Monitores from './pages/Monitores/Monitores'
import Processadores from './pages/Processadores/Processadores'
import Placa from './pages/Placa/Placa'
import Memoria from "./pages/Memoria/Memoria"
import Armazenamento from "./pages/Armazenamento/Armazenamento"
import Produto from "./pages/Produto/Produto";
import NotFound from "./pages/NotFound/NotFound";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";


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
        <Route path='produto' element={<Produto />} />
        <Route path='/login' element={<Login />} />
        <Route path='404' element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App;
