import React from "react";
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";
import "./style.dadosPessoais.css"; 
import Input from "../../../components/Ui/Input/Input";

const DadosPessoais = () => {

    return (
        <main className="page-dados-pessoais">

            <div className="page-dados-pessoais-menu">
                <MenuPerfil page="dados-cadastrais"/>
            </div>

            <div className="page-dados-pessais-form">
                <h1>FORM</h1>
                <label htmlFor="nome">Nome:</label>
                <Input value="Nome" id="nome"/>
            </div>

        </main>
    );

}

export default DadosPessoais;