import { createContext, useState } from "react";

export const Authcontext = createContext()

export const AuthcontextProvider = ({children}) =>{

        const [token,setToken] =useState(null)
        const [isLoggedin,setIsloggedin] =useState(false)
        const [email,setEmail]=useState("")

        return(
                <Authcontext.Provider value={{setToken,token,isLoggedin,setIsloggedin,setEmail,email}} >
                        {children}
                </Authcontext.Provider>
        )
}