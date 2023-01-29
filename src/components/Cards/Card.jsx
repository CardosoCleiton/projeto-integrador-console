import React from 'react'
import './style_cards.css'
import { apiConfig } from "../../config/variables";
import { Link } from 'react-router-dom';


export const Card = ({name, description, price, image, id}) => {

  const formatPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  return (
    <div className='foto-txt-preco-btn'>
      <Link to={`/produto/${id}`}>
        <div className='foto'>
        <img src={`${apiConfig.imagesBaseUrl}/${image}`} alt={name}/>
        </div>

        <div className = 'descricao-produto-cards'>
          <p className='descricao-titulo'>{name}</p>
          <p className='descricao-caracteristicas'>{description}</p>
          <p className='descricao-preco-card'>{formatPrice}</p>
        </div>
      </Link>
      <button className='btn-card'>Adcionar ao carrinho</button>

    </div>
  )
}
