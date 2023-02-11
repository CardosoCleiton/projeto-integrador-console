import LoadingImg from "../../../images/loading.svg";
import "./style.loading.css";

const Loading = ({margin = false, center = false}) => {
   return(
      <main className={`loading ${margin ? "margin-loading" : ""} ${center ? "center" : ""}`}>
         <img src={LoadingImg} alt="Carregando Página..." />
      </main>
   )
}

export default Loading;