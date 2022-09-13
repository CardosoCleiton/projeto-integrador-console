import  '../styles/style_headermobile.css'
import Logo from '../images/logo.png'
import Search from '../images/search.png'
import Carrinho from '../images/carrinho.png'
import User from '../images/iconuser.svg'
// import React, { useEffect, useState } from 'react'


const HeaderMobile = () =>{

  // const [show,setShow] = useState(false);
  // const controlNavbar = () =>{
  //   if(window.scrollY >50){
  //     setShow(true)
  //   }else{
  //     setShow(false)
  //   }
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',controlNavbar)
  //   return () =>{
  //     window.removeEventListener('scroll',controlNavbar)
  //   }
  // },[])

  return (
  <>
      <div className='box-headerm'>
      <div className='area-logo'>
        <div className='txt-logo'>
          <div className='div-logo'>
         <img src={Logo}/>
         </div>
        <div>
        <p>CONSOLE</p>
        </div>
       
        </div>

        <div className='area-input'>
          <input className='input-search' id="search-input" type="text" />
          <div className='lupa-search'>
            <img src={Search}/>
          </div>
        </div>

   

        <div className='txt-area-login-icon'>

        <div className='carrinho-compras'>
        <img src={Carrinho}/>
        </div>
        <div className='icon-user'>
        <img src={User}/>
        </div>

        <div className='txt-area-login'>
           <p>Faça seu <strong>Login</strong> ou <br/> crie seu <strong>Cadastro</strong></p></div>
        </div>

      </div>

    </div>

   <div className='header-total-showm'>
    <div className='nav-total'>
      <nav>
        <ul>
          <li> <a>Monitor</a> <span className='monitor'></span></li>
          <li> <a>Processador</a></li>
          <li> <a>Placa de vídeo</a></li>
          <li> <a>Memória RAM</a></li>
          <li> <a>Armazenamento</a></li>
        </ul>
      </nav>
    </div>

   </div>
  </>
  )

}

export default HeaderMobile;