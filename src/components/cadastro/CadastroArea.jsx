import cadastroImage from "../../images/cadastro.svg";
import { FaUserAlt } from "react-icons/fa"
import Input from "../Ui/Input/Input";
import ButtonPrimary from "../Ui/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import "./style.cadastro-area.css";


const CadastroArea = () => {

  const mystyle = {
    width: "80%",
    height:"80%",
   // CSS CODE
   }

  return (
    <div className="login-area">



      <div className="login-area-form">

        <div className="login-title">
          <h1><FaUserAlt className="login-title-icon" /> Cadastro</h1>
          <div>Crie seu cadastro, compre mais rápido e tenha uma experiência personalizada :)</div>
        </div>

        <form>
          <label htmlFor="nome">Nome: </label>
          <Input type="name" placeholder="Maria da Silva" />

          <label htmlFor="email">Email: </label>
          <Input type="email" placeholder="maria@maria.com.br" />

          <label htmlFor="cpf">CPF: </label>
          <Input type="text" placeholder="000.000000-00" />

          <label htmlFor="nasc">Data de Nascimento: </label>
          <Input type="date" placeholder="00/00/0000" />

          <label htmlFor="password">Senha: </label>
          <Input type="password" />

          <label htmlFor="password">Confirmar Senha: </label>
          <Input type="password" />

          <ButtonPrimary>Entrar</ButtonPrimary>

          <span>Não tem cadastro? <Link to="/#">Cadastre-se</Link></span>
        </form>
      </div>

      <div className="login-area-border"></div>

      <div className="login-area-image">
        <img  style = {mystyle} src={cadastroImage} alt="Icone de pessoa ao lado do notebook para realizar login" />
      </div>


    </div>
  )
}

export default CadastroArea;