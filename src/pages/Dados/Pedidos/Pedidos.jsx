import React from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";
import "./style.pedidos.css"; 

const Pedidos = () => {
   
    return (
        
        <main className="page-dados-pessoais">
            <div className="page-dados-pessoais-menu">
                <MenuPerfil page="dados-cadastrais"/>
            </div>

            <div className="page-dados-pessais-form">
                <div className="login-title">
                <h1><BsFillBasket3Fill className="login-title-icon"/> Pedidos</h1>

                <h2 className="page-sem-pedidos"> Você ainda não tem nenhum pedido</h2>
            </div> 
            </div>
        
        </main> 
    );
}

export default Pedidos;



