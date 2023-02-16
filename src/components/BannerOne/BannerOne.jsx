import './style.bannerone.css'
import { apiConfig } from '../../config/variables'
import { useNavigate } from 'react-router-dom';

export default function BannerOne({product}) {
  //name, description, price, image_products
 
  const navigate = useNavigate();
  const imageUrl = `${apiConfig.imagesBaseUrl}/${product.image_products[0].name}`;
  const formatPrice = product.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  return (
    <>
      <section>
        <div className='div-tv'>
          <img src={imageUrl} alt=""/>
        </div>
        <div className='div-txt-btn-banner'>
          <div>
            <h1 className='titulo-banner'>{product.name}</h1>
            <p className='descricao-produto'>{product.description}</p>
          </div>
          <div className= 'div-preco-e-btn'>
            <h1 className='preco'>{formatPrice}</h1>
            <button className='btn-comprar' onClick={() => navigate(`/produto/${product.id}`)}>Comprar</button>
          </div>
        </div>
      </section>
    </>
  )

}