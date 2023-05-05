import { Box, Button, Heading, SimpleGrid,Flex,VStack, Checkbox, HStack } from '@chakra-ui/react'
import React, {  useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import { AuthContext } from '../Context/AuthContextProvider'


const Products = () => {
 const [data,setData]=useState([])
 const [loading,setLoading]=useState(false)
 const [page,setPage]=useState(1)
 const [total,setTotal]=useState(0)
 const [sort,setSort] =useState("")
 const [filter,setFilter]=useState("")
const {cartItem,setCartItem}=useContext(AuthContext)

console.log(total)
 


 const getData=(page,sort,filter)=>{
    setLoading(true)
    if(sort==""&&filter==""){
        axios.get(`http://localhost:8080/slippers?_limit=8&_page=${page}`)
        .then((res)=>{setData(res.data);setTotal(res.headers['x-total-count'])})
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }else if(sort=='asc'||sort=='desc'){
        axios.get(`http://localhost:8080/slippers?_sort=price&_order=${sort}&_limit=8&_page=${page}`)
        .then((res)=>{setData(res.data);setTotal(res.headers['x-total-count'])})
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }else if(filter ){
        axios.get(`http://localhost:8080/slippers?_limit=8&_page=${page}&title=${filter}`)
        .then((res)=>{setData(res.data);setTotal(res.headers['x-total-count'])})
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }
   
}


const singleCartData=(id)=>{
    axios.get(`http://localhost:8080/slippers/${id}`)
    .then((res)=>{setCartItem([...cartItem,res.data]);})
}

console.log(cartItem)

useEffect(()=>{
    
    getData(page,sort,filter)
    
},[page,sort,filter])

 const handleDelete=()=>{

 }
 if(loading){
    return <Loading/>
 }

  return (
    <>
    <div style={{display:"flex"}}>  
    <Box w={"20%"} p={'10'} bg={'gray.100'} >
        <VStack>
        <Heading size={'md'}>Sort By Price</Heading>
        <Button onClick={()=>{setSort('asc');setFilter("")}}>Low to High</Button>
        <Button onClick={()=>{setSort('desc');setFilter("")}}>High to Low</Button>
        <Button onClick={()=>{setSort('desc');setFilter("")}}>Under - 200</Button>
        <Button onClick={()=>{setSort('desc');setFilter("")}}>Under - 300</Button>
        <Button onClick={()=>{setSort('desc');setFilter("")}}>Discount - 25%</Button>
        <Button onClick={()=>{setSort('desc');setFilter("")}}>Discount - 50%</Button>
        {/* <Button onClick={()=>{setSort('desc');setFilter("")}}>Discount - 75%</Button> */}
         <Box border={'1px '} width={'150px'} borderColor={'black'} size='2px'></Box>
        <br />
         
         <Heading size={'md'}>Filter By Category</Heading>
         <Checkbox value='women'  onChange={(e)=>{setFilter(e.target.value);setSort("");}}>Women</Checkbox>
         <Checkbox value='men'  onChange={(e)=>{setFilter(e.target.value);setSort("");}}>Men</Checkbox>
         <Checkbox value='kids'  onChange={(e)=>{setFilter(e.target.value);setSort("");}}>Kids</Checkbox>
       
        </VStack>
    </Box>

      <div style={{width:"78%",textAlign:"center"}} >
        <SimpleGrid columns={4} spacing={5} mt="3">
            {data.map((e)=>
            <>
            <div style={{textAlign:"center",boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
                <img src={e.image} style={{margin:"auto"}} width="100"/>
                <div>
                <div style={{margin:"auto"}}>
                <h3><b>Title:</b> {e.title}</h3>
                <p><b>Rating:</b> {e.rating}</p>
                <p><b>Selled:</b> {e.selled}</p>
                <p><b>Price:</b> {e.price}</p>
                </div>
                <Link 
                // to={`/cart/${e.id}`} 
                >
                <Button m={2} colorScheme={"green"} onClick={()=>singleCartData(e.id)} >Add to Cart</Button>
                </Link>
               
                </div>
                
            </div>
            </>
            )}
       
        </SimpleGrid>
            <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
    <Button isDisabled={page==1} onClick={()=>setPage(page-1)} color={'black'}>Prev</Button>
        <Button isDisabled={true}>{page}</Button>
        <Button  onClick={()=>setPage(page+1) } color={'black'}>Next</Button>
    </div>
       
       
    </div>
    </div>
   
   
   
   </>

  )
}

export default Products