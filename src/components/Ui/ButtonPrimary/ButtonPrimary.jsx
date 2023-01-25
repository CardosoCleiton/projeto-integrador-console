import "./style.button-primary.css";

const ButtonPrimary = ({children, ...props}) => {
   return(
      <button className="btn-primary" {...props}>
         {children}
      </button>
   )
}

export default ButtonPrimary;