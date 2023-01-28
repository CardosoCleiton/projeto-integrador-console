import { api } from "../../api";

export async function findProductById(id){
   try{
      const product = await api({
         method: "GET",
         url: `/products/${id}`
      });

      return product.data;
   }catch(error){
      throw new Error(error);
   }
}