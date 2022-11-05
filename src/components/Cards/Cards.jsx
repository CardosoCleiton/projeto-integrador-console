import React from 'react'
import './style_cards.css'
//import Image from '../../images/cards_produtos/processadores/image2.png'
import Image from '../../images/cards_produtos/processadores/image2.png'


export const Cards = (props) => {
  return (
    <div className='foto-txt-preco-btn'>
      <div className='foto'>
      <img src={Image} alt=""/>
      </div>

      <div className = 'descricao-produto-cards'>
        <p className='descricao-titulo'>Processador Amd Ryzen 7 5800x, 5° Geração.</p>
        <p className='descricao-caracteristicas'>8 Core 16 Threads, Cache 36mb, 3.8ghz (4.7ghz Max. Turbo) Am4 - 100-100000063WOF</p><p className='descricao-preco-card'>R$ 1.917,01</p>
      </div>
  
      <buttom className='btn-card'>Adcionar ao carrinho</buttom>

    </div>
  )
}
