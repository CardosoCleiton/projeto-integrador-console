import { api } from "../../api";

export const authenticateApi = () => ({

   validateToken: async (token) => {
      try{
         const response = await api({
            method: "GET",
            url: "/users",
            headers: {
               authorization: `Bearer ${token}`
            }
         });
         
         return response.data;
      }catch(error){
         throw new Error(error.response.data.message);
      }
   },

   signIn: async (email, password) => {
      try{
         const response = await api({
            method: "POST",
            url: "/users/authenticate",
            data: {
               email,
               password
            }
         });

         return response.data;
      }catch(error){
         throw new Error(error.response.data.message);
      }
   }

});