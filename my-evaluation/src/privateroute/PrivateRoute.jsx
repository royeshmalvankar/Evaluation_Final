import { useContext } from "react"
import { Authcontext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export const PrivateRoute =({children})=>{
        const {isLoggedin} = useContext(Authcontext)
        if(isLoggedin)
                {
                        <Navigate to="/login"/>
                }
        else
        {
                {children}
        }
}