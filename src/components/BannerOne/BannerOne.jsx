import './style.bannerone.css'

import Tv from '../../images/tv.png'

export default function BannerOne() {
  return (
    <>
      <section>
        <div className='div-tv'>
          <img src={Tv} alt=""/>
        </div>
        <div className='div-txt-btn-banner'>
          <div>
            <h1 className='titulo-banner'>Monitor gamer asus republic of games 24.5'ips</h1>
            <p className='descricao-produto'>Com um suporte ergonomicamente projetado, ele fornece ajustes de inclinação, rotação, eixo e altura para que você possa encontrar facilmente sua posição de visualização ideal. O display também é compatível com VESA para montagem na parede.</p>
          </div>
          <div className= 'div-preco-e-btn'>
            <h1 className='preco'>R$5.099,99</h1>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>
      </section>
    </>
  )

}