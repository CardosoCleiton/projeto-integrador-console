import { useContext } from "react"
import Login from "../../pages/Login/Login";
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({children}) => {
   const auth = useContext(AuthContext);

   if(!auth.user){
      return <Login />
   }

   return children;
}