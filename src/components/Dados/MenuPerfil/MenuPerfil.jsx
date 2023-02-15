import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import "./style.menuPerfil.css";

const MenuPerfil = ({page}) => {

   return(
      <nav>
         <ul className="menu-perfil">
            <li>
               <Link to="/dados/dados-pessoais" className={page === "dados-cadastrais" ? "active" : ""}>
                  <FaUserAlt /> Dados Pessoais
               </Link>
            </li>
            <li>
               <Link to="/dados/pedidos" className={page === "pedidos" ? "active" : ""}>
                  <BsFillBasket3Fill />Pedidos
               </Link>
            </li>
            <li>
               <Link to="/dados/enderecos" className={page === "enderecos" ? "active" : ""}>
                  <HiLocationMarker />Endereços
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default MenuPerfil;