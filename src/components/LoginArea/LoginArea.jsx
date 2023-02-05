import loginImage from "../../images/login.svg";
import { FaUserAlt }  from "react-icons/fa"
import Input from "../Ui/Input/Input";
import ButtonPrimary from "../Ui/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import "./style.login-area.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginArea = () => {

   const auth = useContext(AuthContext);
   const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async (event) => {
      event.preventDefault();
      if(email && password){
         try{
            const isLogged = await auth.signIn(email, password);
            if(isLogged.name){
               navigate("/");
            }

         }catch(error){
            toast.error(error.message, {
               position: "top-right",
               theme: "dark"
            });
         }
      }
   }

   return(
      <div className="login-area">

         <div className="login-area-image">
            <img src={loginImage} alt="Icone de pessoa ao lado do notebook para realizar login" />
         </div>

         <div className="login-area-border"></div>

         <div className="login-area-form">
            <div className="login-title">
               <h1><FaUserAlt className="login-title-icon"/> Login do Cliente</h1>
               <div>Veja seus pedidos de forma fácil, compre mais rápido e tenha uma experiência personalizada :)</div>
            </div>

            <form onSubmit={handleLogin}>
               <label htmlFor="email">Email: </label>
               <Input type="email" placeholder="nome@gmail.com" id="email" value={email} onChange={e => setEmail(e.target.value)} />

               <label htmlFor="password">Senha: </label>
               <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>

               <ButtonPrimary>Entrar</ButtonPrimary>

               <span>Não tem cadastro? <Link to="/#">Cadastre-se</Link></span>
            </form>
         </div>
      </div>
   )
}

export default LoginArea;