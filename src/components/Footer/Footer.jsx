import facebook from "../../images/facebook.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import footerLogo from "../../images/footer-logo.png"
import cardsIcons from "../../images/cards-icons.png"
import email from "../../images/mail.png"
import "./style_footer.css"
import {Link} from "react-router-dom"

const Footer = ({departamentos}) => {

    return (
        <footer>
            <div className="content">
                <div className="footer-generic1 footer-card">
                    <img src={footerLogo} alt=""/>
                    <div>
                        <span>Console é uma loja especializada em produtos para Gamers</span>
                        <p>A Console, não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Ofertas válidas até o término de nossos estoques. Vendas sujeitas à análise e confirmação de dados.</p>
                    </div>
                </div>
                <div className="border-footer"></div>
                <div className="footer-generic2 footer-card">
                    <div className="departamentos">
                        <h3>DEPARTAMENTOS</h3>
                        {departamentos.map(departamento =>{
                            return <Link to={`/categorias/${departamento.slug}`}>{departamento.name}</Link>
                        })}
                        
                    </div>
                    <div className="footer-wrapper">
                        <h3>FORMAS DE PAGAMENTO</h3>
                        <img src={cardsIcons} alt="" />
                    </div>
                </div>
                <div className="border-footer"></div>
                <div className="footer-generic3 footer-card">
                    <div className="central-atendimento">
                        <h3>CENTRAL DE ATENDIMENTO</h3>
                        <Link to="/"><img src={email} alt=""/>atendimento@console.com.br</Link>
                    </div>
                    <div>
                        <h3>MÍDIAS SOCIAIS</h3>
                        <div className="footer-socials">
                            <Link to="#"><img alt="ícone de facebook" src={facebook} /></Link>
                            <Link to="#"><img alt="ícone de linkedin" src={linkedin} /></Link>
                            <Link to="#"><img alt="ícone de youtube" src={youtube} /></Link>
                            <Link to="#"><img alt="ícone de instagram" src={instagram} /></Link>
                            <Link to="#"><img alt="ícone de twitter" src={twitter} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer