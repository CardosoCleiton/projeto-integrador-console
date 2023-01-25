import { api } from "../../api";

export const authenticateApi = () => ({

   validateToken: async (token) => {
      const response = await api({
         method: "GET",
         url: "/users",
         headers: {
            authorization: `Bearer ${token}`
         }
      });
      
      return response.data;
   },

   signIn: async (email, password) => {
      const response = await api({
         method: "POST",
         url: "/users/authenticate",
         data: {
            email,
            password
         }
      });

      return response.data;
   }

});