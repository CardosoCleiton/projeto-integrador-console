import cadastroImage from "../../images/cadastro.svg";
import { FaUserAlt } from "react-icons/fa"
import Input from "../Ui/Input/Input";
import ButtonPrimary from "../Ui/ButtonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.cadastro-area.css";
import { toast } from "react-toastify";
import { createUser } from "../../api/enpoints/user/create-user";
import Loading from "../../components/Ui/Loading/Loading"

const CadastroArea = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const mystyle = {
    width: "80%",
    height:"80%",
   // CSS CODE
   }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(checkPassword !== password){
      toast.error("As senhas não conferem", {
        position: "top-right",
        theme: "dark"
     });
     setLoading(false);
    }

    try{
      await createUser({name, email, password, cpf, birth_date: birthDate});

      toast.success("Usuário criado com sucesso", {
        position: "top-right",
        theme: "dark"
      });

      navigate("/login");
      
    }catch(error){
      console.log(error);
      toast.error(error.response.data?.message, {
        position: "top-right",
        theme: "dark"
     });
     setLoading(false);
    }

  }

  return (
    <div className="login-area">

      <div className="login-area-form">

        <div className="login-title">
          <h1><FaUserAlt className="login-title-icon" /> Cadastro</h1>
          <div>Crie seu cadastro, compre mais rápido e tenha uma experiência personalizada :)</div>
        </div>

        {loading && <Loading />}

        {!loading && 
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome: </label>
          <Input type="name" placeholder="Maria da Silva" id="nome" value={name} onChange={(e) => setName(e.target.value)}/>

          <label htmlFor="email">Email: </label>
          <Input type="email" placeholder="maria@maria.com.br" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="cpf">CPF: </label>
          <Input type="text" placeholder="000.000000-00" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>

          <label htmlFor="nasc">Data de Nascimento: </label>
          <Input type="date" value={birthDate} id="nasc" onChange={(e) => setBirthDate(e.target.value)}/>

          <label htmlFor="password">Senha: </label>
          <Input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>

          <label htmlFor="check-password">Confirmar Senha: </label>
          <Input type="password" id="check-password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)}/>

          <ButtonPrimary>Cadastrar</ButtonPrimary>

          <span>Já tem cadastro? <Link to="/login">Efetue seu login</Link></span>
        </form>
        }
      </div>

      <div className="login-area-border"></div>

      <div className="login-area-image">
        <img  style = {mystyle} src={cadastroImage} alt="Icone de pessoa ao lado do notebook para realizar login" />
      </div>


    </div>
  )
}

export default CadastroArea;