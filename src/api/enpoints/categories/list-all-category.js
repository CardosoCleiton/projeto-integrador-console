import { api } from "../../api";

export async function listAllCategory(){
   try{
      const categories = await api.get("/categories");
      return categories.data;
   }catch(error){
      throw new Error(error);
   }
}