import React from 'react'
import Input from '../../components/input/Input';
import useForm from '../../Hooks/useForm';

const UserPost = () => {
  const nomes  =  useForm();
  const emaill = useForm('email');
  const senhas =  useForm('password');
  //console.log(email);

  //enviar form
  function handleSubmit(event) {
    event.preventDefault();

    if (true) {
      console.log('enviou')


      const username = nomes.value
      const email = emaill.value
      const password = senhas.value


      fetch('https://dogsapi.origamid.dev/json/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        })

    } else {
      console.log('não enviou')
    }

  }

  return (
    <form onSubmit={handleSubmit}>

      <Input
        label='NOME'
        id='nomedeusuario'
        type='text'
        placeholder='Digite seu nome'
        {...nomes}
      />
      <br />
      <br />

      <Input
        label='EMAIL'
        id='emailusuario'
        type='email'
        placeholder='email'
        {...emaill}
      />
      <br />
      <br />
      
      <Input
       label='SENHA'
       id='senhausuario'
       type='password'
       placeholder='password'
       {...senhas}
      />
      <br />
      <button>Enviar</button>

    </form>
  )
}

export default UserPost