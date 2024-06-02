import Navbar from "../components/Navbar"
import Homepage from "../components/Homepage"
import Loginpage from "../components/Loginpage"
import Productdetailpage from "../components/Productdetailpage"
import { Route,Routes } from "react-router-dom"
import { PrivateRoute } from "../privateroute/PrivateRoute"
const AllRoute = () =>{
        return(
                <>
               <Navbar />
               <div>
                <Routes>
                        <Route path="/" element ={<PrivateRoute><Homepage /></PrivateRoute>} />
                        <Route path="/login" element ={<Loginpage/>} />
                        <Route path="/Productdetail/:id" element ={<PrivateRoute><Productdetailpage/></PrivateRoute>} />
                </Routes>
               </div>
               </>

        )
}

export default AllRoute