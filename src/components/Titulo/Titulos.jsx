import './style_titulo.css'
import Vejamais from '../../images/seta_veja_mais.svg'
import { Link } from 'react-router-dom'

export default function Titulo(props){
  return(
    <div className='titulo'>
      <div className='processadores'>{props.name}</div>
      <div className='vejamais-e-seta'>
      <Link to={"/"+props.page} className='veja-mais'>Veja mais</Link>
      <img src={Vejamais} alt=""/>
      </div>
    </div>
  )

}