import './style_header.css'
import Logo from '../../images/logo.png'
import Search from '../../images/search.png'
import Carrinho from '../../images/carrinho.png'
// import User from '../images/iconuser.svg'
import User from '../../images/iconuser.svg'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


const Header = () => {

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

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
  })

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
                <img src={Carrinho} alt=""/>
              </div>
              <div className='icon-user'>
              <Link to='login' className='a'> 
                <img src={User} alt=""/>
                </Link> 
              </div>

              <div className='txt-area-login'>
                <p>Faça seu <strong>Login</strong> ou <br /> crie seu <strong>Cadastro</strong></p></div>
            </div>

          </div>

        </div>

        <div className='nav-total'>
          <nav>
            <ul>
              
                <li> <Link to='monitores' className='a'>Monitor</Link> <span className='monitor'></span></li>
              

              <Link to='processadores'>
                <li>  <Link to='processadores' className='a'>Processador</Link> </li>
              </Link>

              <Link to='placas'>
                <li>  <Link to='placas' className='a'>Placa de vídeo</Link> </li>
              </Link>

              <Link to='memoria'>
                <li>  <Link to='memoria' className='a'>Memoria RAM</Link> </li>
              </Link>

              <Link to='armazenamento'>
                <li>  <Link to='armazenamento' className='a'>Armazenamento</Link> </li>
              </Link>

            </ul>
          </nav>
        </div>

      </div>
    </>
  )

}

export default Header;