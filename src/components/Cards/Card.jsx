import React from 'react'
import './style_cards.css'
import { apiConfig } from "../../config/variables";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/Carrinho/CarrinhoContext';


export const Card = ({name, description, price, image, id}) => {

  const carrinho = useContext(CarrinhoContext);

  const addItemCart = () => {
    carrinho.addItem({
      name,
      description,
      unitPrice: price,
      image: `${apiConfig.imagesBaseUrl}/${image}`,
      id,
      quantity: 1,
      totalPrice: price
    });
  }

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
      <button className='btn-card' onClick={addItemCart}>Adcionar ao carrinho</button>

    </div>
  )
}
