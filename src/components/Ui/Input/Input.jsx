import "./style.input.css"

const Input = ({...props}) => {
  return (
    <input 
      className="input-form"
      {...props}
    />
  )
}

export default Input