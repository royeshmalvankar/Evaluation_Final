import { Button, Input } from "@chakra-ui/react"
import axios from "axios"
import { useState,useContext } from "react"
import { Authcontext } from "../context/AuthContext"

const Loginpage = () =>{
        const [password,setPassword]=useState("")
        const{setToken,setIsloggedin,email,setEmail,token} = useContext(Authcontext)

        let user={
                email,
                password
        }
        const login=async()=>{
                let resp=await axios.post('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login',user)
                setToken(resp.data.token);
                console.log(resp.data.token);
                if(token)
                        {
                                setIsloggedin(true)
                        }
                 else{
                        alert("Wrong Details")
                 }       
        }

        return (
              <>
              <div>
                <label htmlFor="">Email</label>
                <Input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <br />
                <label htmlFor="">Password</label>
                <Input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br />
                <br />
                <Button onClick={login}>Submit</Button>
              </div>
              </>
        )
}

export default Loginpage