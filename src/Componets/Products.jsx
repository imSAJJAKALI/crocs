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
    <Flex>  
    <Box position={'absolute'} ml={'10'}zIndex={'overlay'} p={'10'} bg={'gray.100'} >
        <VStack>
        <Heading size={'md'}>Sort By Price</Heading>
        <Button onClick={()=>{setSort('asc');setFilter("")}}>Low to High</Button>
        <Button onClick={()=>{setSort('desc');setFilter("")}}>High to Low</Button>
         <Box border={'1px '} width={'150px'} borderColor={'black'} size='2px'></Box>
        <br />
         
         <Heading size={'md'}>Filter By Category</Heading>
         <Checkbox value='jeans'  onChange={(e)=>{setFilter(e.target.value);setSort("");}}>Jeans</Checkbox>
        </VStack>
    </Box>

      <div  style={{width:"75%",marginLeft:"25%"}} >
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
       
       
    </div>
    </Flex>
   
    <SimpleGrid columns={3} >
    <Button isDisabled={page==1} onClick={()=>setPage(page-1)} color={'black'}>Prev</Button>
        <Button isDisabled={true}>{page}</Button>
        <Button isDisabled={page==(Math.floor(total/8))} onClick={()=>setPage(page+1) } color={'black'}>Next</Button>
    </SimpleGrid>
   
   </>

  )
}

export default Products