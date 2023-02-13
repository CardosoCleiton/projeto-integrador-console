import { api } from "../../api";

export async function calcularFrete({items, cep}){
   try{
      const { data } = await api({
         method: "POST",
         url: `/freight`,
         data: {
            items: items.map(item => {
               return {
                  productId: item.id,
                  quantity: item.quantity ?? 1
               }
            }),
            address: {
               zip: cep
            }
         }
      });

      return data;
   }catch(error){
      throw new Error(error);
   }
}