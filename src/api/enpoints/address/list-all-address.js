import { api } from "../../api";

export async function listAllAddress(token){
   try{
      const address = await api({
         method: "get",
         url: "/address",
         headers: {
            authorization: `Bearer ${token}`
         }
      });

      return address.data;
   }catch(error){
      throw new Error(error);
   }
}