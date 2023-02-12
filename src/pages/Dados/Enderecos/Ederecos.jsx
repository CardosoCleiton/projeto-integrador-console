import React, { useState } from 'react';
import { HiLocationMarker }  from "react-icons/hi";
import ButtonPrimary from "../../../components/Ui/ButtonPrimary/ButtonPrimary";
import Input from "../../../components/Ui/Input/Input";
import "./style.enderecos.css"; 
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";

const Enderecos = () => {

  const [enderecos, setEnderecos] = useState([]);
  const [novoEndereco, setNovoEndereco] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    setEnderecos([ ...enderecos, novoEndereco]);
  };

  const handleInputChange = event => {
    setNovoEndereco({ ...novoEndereco, [event.target.name]: event.target.value });
  };

  return (

    <main className="page-dados-pessoais">
        
        <div className="page-dados-pessoais-menu">
            <MenuPerfil page="enderecos"/>
        </div>

        <div className="page-dados-pessais-form">
            <div className="login-title">
                <h1><HiLocationMarker className="login-title-icon"/> Endereços Salvos</h1>
            
            
            <ul className="page-adicionar-endereco">
                {enderecos.map((endereco, index) => (
                    <li key={index}>
                        {endereco.rua}, {endereco.cidade}, {endereco.estado}
                    </li>
                ))}
            </ul>

            <h2 className="page-title-cadastrar-endereco"> Cadastrar Endereço</h2>
            
            <form className="form-dados-pessoais" onSubmit={handleSubmit}>
                <label htmlFor="rua">Rua:</label>
                <Input
                    type="texto"
                    id="rua"
                    name="rua"
                    onChange={handleInputChange}
                />
               
                <label htmlFor="cidade">Cidade:</label>
                <Input
                    type="texto"
                    id="cidade"
                    name="cidade"
                    onChange={handleInputChange}
                />
                               
                <label htmlFor="estado">Estado:</label>
                <Input
                    type="texto"
                    id="estado"
                    name="estado"
                    onChange={handleInputChange}
                />
                                    
                    <ButtonPrimary type="submit">Salvar</ButtonPrimary>   
            </form>
            </div>
        </div>
    </main>
    );
    };

    export default Enderecos;
      