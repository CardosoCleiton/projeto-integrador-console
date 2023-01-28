import './style_headermobile.css'
import Logo from '../../images/logo.svg'
import Search from '../../images/search.svg'
import Carrinho from '../../images/carrinho.svg'
import User from '../../images/iconuser.svg'
import Monitor from '../../images/monitor.svg'
import Processador from '../../images/processador.svg'
import Placavideo from '../../images/placavideo.svg'
import Memoriaram from '../../images/memoriaram.svg'
import Hd from '../../images/hd.svg'
import Menu from '../../images/menu.svg'
import Fechar from '../../images/fechar.svg'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const HeaderMobile = () => {

  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(!menu)
    console.log(menu)
  }

  
  const [positionn, setPositionn] = useState(window.pageYOffset)
  const [visiblee, setVisiblee] = useState(true) 

  useEffect(()=> {
    const handleScroll = () => {
       let moving = window.pageYOffset
       
       setVisiblee(positionn > moving); //true or false
       setPositionn(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return(() => {
       window.removeEventListener("scroll", handleScroll);
    })
})

const showw = visiblee ? 'box-headermshow ' :  'box-headermhiden';


  return (
    <>
      <div className={menu ? 'mascarashow' : 'mascarahide'} onClick={handleClick}>
      </div>

      <div className={showw}>

        <div className='area-logom'>

          <div className='div-menu'>
            <img src={Menu} onClick={handleClick} alt="" />
          </div>

          <div className='area-input'>
            <input className='input-search' id="search-input" type="text" />

            <div className='lupa-search'>
              <img src={Search} alt=""/>
            </div>
          </div>

          <div className='txt-logom'>
            <img src={Logo} alt=""/>
            <p>CONSOLE</p>
          </div>
        </div>
      </div>

      <div className='header-total-showm'>
        <div className={menu ? 'nav-total' : 'nav-totalhiden'}>
          <nav>
            <div className='icons-nav'>
              <div className='div-usuario'>
                <img src={User}  className='btn-user' alt=""/>
                <Link to="/login">Login</Link>
              </div>
              <div className='div-carrinho'>
                <img src={Carrinho} className='btn-carrinho' alt="" />
                <Link to="/minhas-compras">Minhas Compras</Link>
              </div>
            <img src={Fechar} className='btn-fechar' onClick={handleClick} alt="" />
            </div>
            <ul>
              <li>
                <img src={Monitor} alt="" />
                <Link to="/monitores">Monitor</Link>
              </li>
              <li>
                <img src={Processador} alt="" />
                <Link to="/processadores">Processador</Link>
              </li>
              <li>
                <img src={Placavideo} alt="" />
                <Link to="/placas">Placa de vídeo</Link>
              </li>
              <li>
                <img src={Memoriaram} alt="" />
                <Link to="/memoria">Placa de vídeo</Link>
              </li>
              <li>
                <img src={Hd} alt=""/>
                <Link to="/armazenamento">Armazenamento</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )

}

export default HeaderMobile;