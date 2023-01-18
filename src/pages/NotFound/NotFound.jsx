import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImageNotFound from "../../images/notfound.svg"
import "./style.not-found.css";

const NotFound = () => {

   const navigate = useNavigate();

   const goHome = useCallback(() => {
      navigate("/");
   }, [navigate]);

   return(
      <main className="page-not-found">
         <div>
            <h1>Oops... Essa página não existe</h1>
            <p>Retorne a página Inicial da Console clicando no botão abaixo.</p>
            <button onClick={goHome}>Página Inicial</button>
         </div>
         <div className="imagem-draw">
            <img src={ImageNotFound} alt="Ilustração de personagem "/>
         </div>
      </main>
   )
}

export default NotFound;