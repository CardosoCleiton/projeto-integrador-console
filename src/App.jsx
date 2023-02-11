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
import Cadastro from "./pages/cadastro/Cadastro";
import Produto from "./pages/Produto/Produto";
import DadosPessoais from "./pages/Dados/DadosPessoais/DadosPessoais";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Carrinho from "./pages/Carrinho/Carrinho";


const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000}/>
      <HeaderMobile />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='monitores' element={<Monitores/>}/>
        <Route path='processadores' element={<Processadores/>}/>
        <Route path='placas' element={<Placa/>}/>
        <Route path='memoria' element={<Memoria/>}/>
        <Route path='armazenamento' element={<Armazenamento/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='login' element={<Login />} />
        <Route path='404' element={<NotFound />} />
        <Route path='dados/dados-pessoais' element={<DadosPessoais/>} />
      {/*   <Route path="dados/pedidos" element={<Pedidos/>} />
        <Route path="dados/enderecos" element={<Enderecos/>} /> */}
        <Route path="*" element={<Navigate to="/404" />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App;
