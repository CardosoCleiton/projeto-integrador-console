import { api } from "../../api";

export async function createOrder(paymentData, orderData, token){
   const { data } = await api({
      method: "POST",
      url: "/order",
      headers: {
         authorization: `Bearer ${token}`
      },
      data: {
         paymentData,
         orderItems: orderData.orderItems,
         freight: orderData.freight
      }
   });
   return data;
}