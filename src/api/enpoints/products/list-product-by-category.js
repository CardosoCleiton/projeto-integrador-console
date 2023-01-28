import { api } from "../../api";

export async function listProductByCategory(category, limit, page){

   let url = `/products/category/${category}?page=${page}&limit=${limit}`;

   try{
      const response = await api({
         method: "GET",
         url: url
      });

      return response.data;

   }catch(error){
      throw new Error(error);
   }
}