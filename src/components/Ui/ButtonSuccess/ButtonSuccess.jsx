import "./style.btn-success.css";

const ButtonSuccess = ({children, ...props}) => {
   return(
      <button className="btn-success" {...props}>
         {children}
      </button>
   )
}

export default ButtonSuccess;