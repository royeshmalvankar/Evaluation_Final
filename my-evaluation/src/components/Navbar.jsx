import {Stack,Flex, Spacer,Box} from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Navbar = () =>{
        return(
                <Flex>
                        <Box>
                        <Link to="/" >Home</Link> 
                         </Box>
                     <Spacer/> 
                        <Box>
                        <Link to="/login">Login</Link> 
                     </Box>
                </Flex>
        )
}

export default Navbar