import '../styles/style_titulo.css'
import Vejamais from '../images/seta_veja_mais.svg'

export default function Titulo(props){
  return(
    <div className='titulo'>
      <div className='processadores'>{props.name}</div>
      <div className='vejamais-e-seta'>
      <a className='veja-mais'>veja mais</a>
      <img src={Vejamais}/>
      </div>
    </div>
  )

}