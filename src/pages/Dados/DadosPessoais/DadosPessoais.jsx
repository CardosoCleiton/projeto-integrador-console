import React from "react";
import { FaUserAlt }  from "react-icons/fa"
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";
import "./style.dadosPessoais.css"; 
import ButtonPrimary from "../../../components/Ui/ButtonPrimary/ButtonPrimary";
import Input from "../../../components/Ui/Input/Input";

const DadosPessoais = () => {

    return (
        <main className="page-dados-pessoais">

            <div className="page-dados-pessoais-menu">
                <MenuPerfil page="dados-cadastrais"/>
            </div>

            <div className="page-dados-pessais-form">
                <div>
                    <div className="login-title">
                    <h1><FaUserAlt className="login-title-icon"/> Dados Pessoais</h1>
                    </div>  
                    <form className="form-dados-pessoais"> 
                        <label htmlFor="nome">Nome:</label>                        
                        <Input value="Nome" />

                        <label htmlFor="email">Email: </label>                      
                        <Input value="nome@gmail.com" id="email" />     

                        <label htmlFor="cpf">CPF:</label>
                        <Input value="xxx.xxx.xxx-xxx" />                       
                    
                        <label>Data de Nascimento:</label>
                        <Input type="date" value="birthdate" required />

                        <ButtonPrimary>Atualizar</ButtonPrimary>           
                    </form>           

                </div>
                           
            </div>
            
        </main>
    );

}

export default DadosPessoais;