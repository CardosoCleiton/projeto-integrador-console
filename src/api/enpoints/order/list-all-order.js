import { api } from "../../api";

export async function listAllOrder(token){
   const { data } = await api({
      method: "GET",
      url: "/order",
      headers: {
         authorization: `Bearer ${token}`
      }
   });
   return data;
}