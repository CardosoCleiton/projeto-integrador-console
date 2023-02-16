import { api } from "../../api";

export async function createUser({name, email, password, cpf, birth_date}){
   const { data } = await api({
      method: "POST",
      url: "/users",
      data: {
         name, 
         email,
         password,
         cpf,
         birth_date
      }
   });

   return data;
}