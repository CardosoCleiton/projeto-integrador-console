import React from "react";
//Components
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import HeaderMobile from './components/HeaderMobile/HeaderMobile'
//Paginas
import Home from './pages/Home/Home'
import Cadastro from "./pages/cadastro/Cadastro";
import Enderecos from "./pages/Dados/Enderecos/Ederecos";
import Produto from "./pages/Produto/Produto";
import DadosPessoais from "./pages/Dados/DadosPessoais/DadosPessoais";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Carrinho from "./pages/Carrinho/Carrinho";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Ui/Loading/Loading";
import { listAllCategory } from "./api/enpoints/categories/list-all-category";
import { Categoria } from "./pages/Categoria/Categoria";


const App = () => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const allCategories = await listAllCategory();
      setCategories(allCategories);
      setLoading(false);
    })();
  }, []);
  console.log(categories);
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000}/>
      <HeaderMobile />
      <Header categorias={categories}/>
      {loading && <Loading center={true} margin={true}/>}
      {!loading && 
        <Routes>
          <Route path='/' element={<Home/>}/>
          {categories.map(categorie => {
            return <Route path="/categorias/:categoria" element={<Categoria />} key={categorie.id}/>
          })}
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/produto/:id' element={<Produto />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/login' element={<Login />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/dados/dados-pessoais' element={<DadosPessoais/>} />
        {/*  <Route path="dados/pedidos" element={<Pedidos/>} /> */}
          <Route path="dados/enderecos" element={<Enderecos/>} /> 
          <Route path="*" element={<Navigate to="/404" />}/>
        </Routes>
      }
      <Footer departamentos={categories}/>
    </BrowserRouter>

  )
}

export default App;
