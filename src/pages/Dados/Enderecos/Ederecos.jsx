import React, { useState } from 'react';
import { HiLocationMarker }  from "react-icons/hi";
import ButtonPrimary from "../../../components/Ui/ButtonPrimary/ButtonPrimary";
import Input from "../../../components/Ui/Input/Input";
import "./style.enderecos.css"; 
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";
import { MdDelete, MdEditNote } from "react-icons/md";
import { useEffect } from 'react';
import { listAllAddress } from "../../../api/enpoints/address/list-all-address"

const Enderecos = () => {

  const [enderecos, setEnderecos] = useState([]);

  const [editarEndereco, setEditarEndereco] = useState({});
  const [hiddenFormEdit, setHiddenFormEdit] = useState(true);


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    (async () => {
        const allAddress = await listAllAddress(token);
        setEnderecos(allAddress);
    })();
  }, []) 


  const handleAlterAddress = (endereco) => {
    setEditarEndereco(endereco);
    setHiddenFormEdit(false);
  }

  const handleInput= (event) => {
    console.log(handleInput);
  }

  return (

    <main className="page-dados-pessoais">
        
        <div className="page-dados-pessoais-menu">
            <MenuPerfil page="enderecos"/>
        </div>

        <div className="page-dados-pessais-form page-enderecos">
            <div className="login-title">
                <h1><HiLocationMarker className="login-title-icon"/> Endereços Salvos</h1>
            </div>

              <table className="lista-enderecos">
                  <thead>
                      <tr>
                          <th>Tipo</th>
                          <th>CEP</th>
                          <th>Rua/Avenida</th>
                          <th>Número</th>
                          <th>Cidade</th>
                          <th>Estado</th>
                          <th>Ações</th>
                      </tr>
                  </thead>
                  <tbody>
                      {enderecos.map((endereco) => {
                        return (
                        <tr key={endereco.id}>
                            <td>{endereco.type}</td>
                            <td>{endereco.cep}</td>
                            <td>{endereco.street}</td>
                            <td>{`${endereco.number} ${endereco.complement ?? ""}`}</td>
                            <td>{endereco.city}</td>
                            <td>{endereco.state}</td>
                            <td>
                                <button className='endereco-acoes lixo'><MdDelete /></button>
                                <button className='endereco-acoes editar' onClick={() => handleAlterAddress(endereco)}><MdEditNote /></button>
                            </td>
                         </tr>
                        )
                      })}
                  </tbody>
              </table>

            <div className='form-editar-endereco' style={hiddenFormEdit === true ? {display: "none"} : {display: "block"}}>
                <h2 className="page-title-cadastrar-endereco">Atualizar Endereço</h2>
                <form className="form-dados-pessoais">
 
                    <label htmlFor="tipo-endereco" defaultValue={editarEndereco.type}>Tipo de Endereço:</label>
                    <select name="tipo-endereco" id="tipo-endereco">
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Alternativo">Alternativo</option>
                    </select>

                    <label htmlFor="cep">CEP:</label>
                    <Input
                        value={editarEndereco.cep ?? ""}
                        type="texto"
                        id="cep"
                        name="cep"
                        onChange={handleInput}
                    />

                    <label htmlFor="rua">Rua:</label>
                    <Input
                        value={editarEndereco.street ?? ""}
                        type="texto"
                        id="rua"
                        name="rua"
                        onChange={handleInput}
                    />

                    <label htmlFor="numero">Número:</label>
                    <Input
                        value={editarEndereco.number ?? ""}
                        type="texto"
                        id="numero"
                        name="numero"
                        onChange={handleInput}
                    />

                    <label htmlFor="complemento">Complemento:</label>
                    <Input
                        value={editarEndereco.complement ?? ""}
                        type="texto"
                        id="complemento"
                        name="complemento"
                        onChange={handleInput}
                    />
                
                    <label htmlFor="cidade">Cidade:</label>
                    <Input
                        value={editarEndereco.city ?? ""}
                        type="texto"
                        id="cidade"
                        name="cidade"
                        onChange={handleInput}
                    />
                                
                    <label htmlFor="estado">Estado:</label>
                    <Input
                        value={editarEndereco.state ?? ""}
                        type="texto"
                        id="estado"
                        name="estado"
                        onChange={handleInput}
                    />
                                        
                    <ButtonPrimary type="submit">Atualizar</ButtonPrimary>   
                </form>
            </div>
            
        </div>
    </main>
    );
    };

    export default Enderecos;
      