import '../styles/style.bannerone.css'

import Tv from '../images/tv.png'

export default function BannerOne() {
  return (
    <>
      <section>
        <div className='div-tv'>
          <img src={Tv} />
        </div>
        <div className='div-txt-btn-banner'>
          <p className='titulo-banner'>Monitor gamer asus republic of games 24.5'ips</p>
          <p className='descricao-produto'>Com um suporte ergonomicamente projetado, ele fornece ajustes de inclinação, rotação, eixo e altura para que você possa encontrar facilmente sua posição de visualização ideal. O display também é compatível com VESA para montagem na parede.</p>
          <div className= 'div-preco-e-btn'>
          <p className='preco'>R$5.099,99</p>
          <button className='btn-comprar'>Comprar</button>
          </div>
        </div>

      </section>
    </>
  )

}