import LoadingImg from "../../../images/loading.svg";
import "./style.loading.css";

const Loading = () => {
   return(
      <main className="loading">
         <img src={LoadingImg} alt="Carregando Página..." />
      </main>
   )
}

export default Loading;