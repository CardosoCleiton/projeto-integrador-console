import React from "react";
import { FaUserAlt }  from "react-icons/fa"
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";
import "./style.dadosPessoais.css"; 
import ButtonPrimary from "../../../components/Ui/ButtonPrimary/ButtonPrimary";
import Input from "../../../components/Ui/Input/Input";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../../components/Ui/Loading/Loading";

const DadosPessoais = () => {

    const [loading, setLoading] = useState(false);
    const authProvider = useContext(AuthContext)

    //Dados
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [dtNasc, setDtNasc] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true);
            setEmail(authProvider.user.email);
            setCpf(authProvider.user.cpf);
            setNome(authProvider.user.name);
            setDtNasc(formatDate(authProvider.user.birth_date));
            setLoading(false);
        })()
    }, []) //eslint-disable-line

    const formatDate = (date) => {
        const newDate = new Date(date);
        const month = (newDate.getMonth() + 1) < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
        return `${newDate.getFullYear()}-${month}-${newDate.getDate() + 1}`
    }

    const alterarNome = (event) => {
        const name = event.target.value;
        setNome(name);
    }

    const alterarEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }

    const alterarCpf = (event) => {
        const cpf = event.target.value;
        setEmail(cpf);
    }

    const alterarDtNasc = (event) => {
        const date = event.target.value;
        const dateFormat = formatDate(new Date(date));
        setDtNasc(dateFormat);
    }

    return (
        <main className="page-dados-pessoais">

            <div className="page-dados-pessoais-menu">
                <MenuPerfil page="dados-cadastrais"/>
            </div>

            <div className="page-dados-pessais-form">
                {loading && <Loading />}
                {!loading && <div>
                    <div className="login-title">
                        <h1><FaUserAlt className="login-title-icon"/> Dados Pessoais</h1>
                    </div>  
                    <form className="form-dados-pessoais"> 
                        <label htmlFor="nome">Nome:</label>                        
                        <Input value={nome} onChange={alterarNome}/>

                        <label htmlFor="email">Email: </label>                      
                        <Input value={email} id="email" onChange={alterarEmail}/>     

                        <label htmlFor="cpf">CPF:</label>
                        <Input value={cpf} onChange={alterarCpf}/>                       
                    
                        <label>Data de Nascimento:</label>
                        <Input type="date" value={dtNasc} onChange={alterarDtNasc} required />

                        <ButtonPrimary>Atualizar</ButtonPrimary>           
                    </form>           

                </div>}               
            </div>
            
        </main>
    );

}

export default DadosPessoais;