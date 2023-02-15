import './style_header.css'
import './style.drop-menu.css'
import Logo from '../../images/logo.png'
import Search from '../../images/search.png'
import Carrinho from '../../images/carrinho.png'
// import User from '../images/iconuser.svg'
import User from '../../images/iconuser.svg'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CarrinhoContext } from '../../contexts/Carrinho/CarrinhoContext'


const Header = ({categorias}) => {

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const auth = useContext(AuthContext);
  const carrinhoContext = useContext(CarrinhoContext);
  
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset
      setVisible(position > moving); //true or false
      setPosition(moving)
    };

    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  }, [position, visible]) //eslint-disable-line
  
  const handleLogout = async (event) => {
    event.preventDefault();
    await auth.signOut();
    window.location.reload();
  }

  const show = visible ? 'header-total-show ' : 'header-total-hiden';

  return (
    <>
      <div className={show}>

        <div className='box-header'>
          <div className='area-logo'>
            <div className='txt-logo'>
              <div>
                <Link to='/'>
                  <img src={Logo} alt="" />
                </Link>

              </div>
              <div>

                <p>CONSOLE</p>

              </div>

            </div>

            <div className='area-input'>
              <input className='input-search' id="search-input" type="text" placeholder="Oque você procura?" />
              <div className='lupa-search'>
                <img src={Search} alt=""/>
              </div>
            </div>



            <div className='txt-area-login-icon'>

              <div className='carrinho-compras'>
                <Link to="/carrinho"><img src={Carrinho} alt=""/></Link>
                {carrinhoContext.carrinho.length > 0 && <span>{carrinhoContext.carrinho.length}</span>}
              </div>
              <div className='icon-user'>
              <Link to='login' className='a'> 
                <img src={User} alt=""/>
              </Link> 
              </div>

              <div className='txt-area-login'>
                
                {!auth.user && <p>Faça seu <strong><Link to="/login">Login</Link></strong> ou <br /> crie seu <strong>Cadastro</strong></p>}
                
                {auth.user &&
                  <>
                    <p>Bem vindo <strong>{auth.user.name.split(" ")[0]}</strong></p>
                    <ul>
                      <li>Minha Conta &#9660;
                        <ul>
                          <li><Link to="/dados/pedidos">Pedidos</Link></li>
                          <li><Link to="/dados/dados-pessoais">Cadastro</Link></li>
                          <li><Link to="/dados/enderecos">Endereços</Link></li>
                          <li><Link to="#" onClick={handleLogout}>Sair da conta</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </>
                } 
              </div>

            </div>

          </div>

        </div>

        <div className='nav-total'>
          <nav>
            <ul>
              {categorias.map(categoria => {
                return <li key={categoria.id}><Link to={`/categorias/${categoria.slug}`} className='a'>{categoria.name}</Link></li>
              })}
            </ul>
          </nav>
        </div>

      </div>
    </>
  )

}

export default Header;