import { AuthContext } from "./AuthContext";
import { useState } from "react";
import { authenticateApi } from "../../api/enpoints/user/authenticate";
import { useEffect } from "react";

export const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);

   const api = authenticateApi();

   useEffect(() => {
      const validateToken = async () => {
         const storageData = localStorage.getItem("authToken");
         if(storageData){
            const data = await api.validateToken(storageData);
            if(data.user){
               setUser(data.user)
            }
         }
      }
      validateToken();
   }, []); // eslint-disable-line

   const signIn = async (email, password) => {
      try{
         const data = await api.signIn(email, password);
         
         if(data.user && data.token){
            setUser(data.user);
            setToken(data.token)
            return data.user;
         }

         return false;
      }catch(error){
         throw new Error(error.message)
      }
   }

   const signOut = async () => {
      setUser(null);
      setToken("");
   }

   const setToken = (token) => {
      localStorage.setItem("authToken", token)
   }

   return(
      <AuthContext.Provider value={{user, signIn, signOut}}>
         {children}
      </AuthContext.Provider>
   )

}