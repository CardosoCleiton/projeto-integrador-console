import { useState } from 'react'


const types = {
  cep: {
    regex: /^[0-9]{5}-[0-9]{3}$/,
    message: 'Cep inválido'
  },
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    message: 'Email inválido'
  },
  password:{
    regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:'Senha invalid, sua senha deve ter: 1-digito 2-letra M 3-letra m 4- min: oito caracteres'
  }
}



const useForm = (type) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false;
    } else {
      setError(null)
      return true;
    }
  }

  function onChange({target}){
    if (error) validate(target.value);
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm