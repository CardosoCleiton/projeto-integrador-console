import React from "react";
import { useState } from "react";
import "./style.dadosPessoais.css"; 

const DadosPessoais = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        birthdate: ''
    });
    
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    
    return (
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="birthdate">Data de Nascimento:</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );

}

export default DadosPessoais;