import facebook from "../../images/facebook.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import footerLogo from "../../images/footer-logo.png"
import cardsIcons from "../../images/cards-icons.png"
import email from "../../images/mail.png"
import "./style_footer.css"

const Footer = () => {

    return (
        <>
            <footer>
                <div class="footer-generic1">
                    <img src={footerLogo}/>
                        <span>Console é uma loja especializada em produtos para Gamers</span>
                        <p>A Console, não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Ofertas válidas até o término de nossos estoques. Vendas sujeitas à análise e confirmação de dados.</p>
                </div>
                <div class="footer-generic2">
                    <h3>DEPARTAMENTOS</h3>
                    <a href="#">Monitor</a>
                    <a href="#">Processador</a>
                    <a href="#">Placa de vídeo</a>
                    <a href="#">Memória Ram</a>
                    <a href="#">Armazenamento</a>
                    <div class="footer-wrapper">
                        <h3>FORMAS DE PAGAMENTO</h3>
                        <img src={cardsIcons}/>
                    </div>
                </div>
                <div class="footer-generic3">
                    <h3>CENTRAL DE ATENDIMENTO</h3>
                    <a><img src={email}/> atendimento@console.com.br</a>
                    <h3>MÍDIAS SOCIAIS</h3>
                    <div class="footer-socials">
                        <a href="#" target="_blank" rel="noopener noreferrer"><img alt="ícone de facebook" src={facebook}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img alt="ícone de linkedin" src={linkedin}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img alt="ícone de youtube" src={youtube}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img alt="ícone de instagram" src={instagram}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><img alt="ícone de twitter" src={twitter}/></a>
                    </div>
                </div>
            </footer>
        </>
    )
} 

export default Footer