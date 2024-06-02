import { useState,useEffect } from 'react'
import { Box, Button, Container,Flex,Select,SimpleGrid,Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Homepage = () =>{

        const [data,setdata] = useState([])
        const [Filter,setFilter]=useState("")
        const [Sort,setSort] = useState("")

        const navigate = useNavigate()
        useEffect(()=>{
                getdata()
        },[Filter,Sort])
        const getdata =async ()=>{
                let queryparams = {}
                if(Filter)
                        {
                                queryparams.filter=Filter
                        }
                if(Sort)
                        {
                                queryparams.sort="price",
                                queryparams.order=Sort
                        }
                        console.log(queryparams);
                const  resp = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",{params:queryparams})
                console.log(resp.data.data);
                setdata(resp.data.data)
        }

        const Product = ({title,category,price,id}) =>{
                return(
                        <>
                        <Box  border="1px dashed grey" padding={10} gap={10} marginTop={10}>
                            <h1>{title}</h1>
                            <p>{category}</p>
                            <p>{price}</p> 
                            <Button onClick={()=>{navigate(`/Productdetail/${id}`)}}>More Detail</Button>   
                        </Box>
                        </>
                )
        }

        return(
                <>
                <Flex marginTop={20} gap={10}>
                        <Select placeholder='Sort by Price' value={Sort} onChange={(e)=>{setSort(e.target.value)}}>
                                <option value="asc">Low to High</option>
                                <option value="desc">Hign to low</option>
                        </Select>
                        <Select placeholder='Filter By Category' value={Filter} onChange={(e)=>{setFilter(e.target.value)}}>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                                <option value="homedecor">Home decor</option>

                        </Select>
                </Flex>
                <Box>
                <SimpleGrid columns={{base:3,md:2,sm:1}} spacing={10}>
                        {data.map((ele)=>{
                                        return(
                                
                                        <Product {...ele} key={ele.id}/>
                                        
                                        )
                        })}
               </SimpleGrid>
               </Box>
               </>
        )
}

export default Homepage