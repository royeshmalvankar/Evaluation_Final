import { Heading,Box, Container,Image, Center, Button } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Productdetailpage = () =>{
        const {id} = useParams()
        const [data,setdata]=useState({})

        useEffect(()=>{
                getsingledata()
        },[])

       
        const getsingledata = async ()=>{
                const resp = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
                setdata(resp.data.data)

        }
        console.log(data);
        return(
              <>
                <div style={{textAlign:"center"}}>
                <img style={{marginLeft:"42%"}} src={data.image} alt="" />
                <h1>Title: <i>{data.title}</i></h1>
                <p>Band: <i>{data.brand}</i></p>
                <p>Price: <i>{data.price}</i></p>
                <p>Category: <i>{data.category}</i></p>
                <Button >Add To Cart</Button>
                </div>
              </>
        )
}

export default Productdetailpage