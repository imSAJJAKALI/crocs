import React, { useEffect, useReducer, useState } from 'react'
import {Box, Button, Center, Input, VStack, Heading, HStack, Grid, GridItem, SimpleGrid, Flex, Spacer} from '@chakra-ui/react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const initialState={
    image:"",
    title:"",
    rating:"",
    price:"",
    selled:""
}

const reducer=(state,action)=>{
   switch (action.type) {
    case "Image":{
        return {
            ...state,
            image:action.payload
        }
    }
    case "Title":{
        return {
            ...state,
            title:action.payload
        }
    }
    case "Rating":{
        return {
            ...state,
            rating:action.payload
        }
    }
    case "Price":{
        return {
            ...state,
            price:action.payload
        }
    }
    case "Selled":{
        return {
            ...state,
            selled:action.payload
        }
    }
        
       case "reset":{
        return initialState
       }
   
    default:{

       return state;
    }
   }
}

const AdminPaage = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const [data,setData]=useState([])
    

    const getData=()=>{
        axios.get(`http://localhost:8080/slippers`)
        .then((res)=>{setData(res.data);console.log(res)})
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{

        getData()
        
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
      
       axios.post(`http://localhost:8080/slippers`,state)
       dispatch({type:"reset"})
       
    }
    const handleDelete=(id)=>{
       
       
        axios.delete(`http://localhost:8080/slippers/${id}`)
   
    }


    

   

  return (
    <div style={{width:"100%"}}>
     <Heading >Admin Page</Heading>
     <hr style={{marginTop:"20px"}} />
    <Box style={{display:"flex"}} position={'fixed'} zIndex={'4'} >
       
        <VStack shadow='md' borderWidth='1px' mt="3" p="10"  borderRadius={10}>
       
       <Heading size={'lg'}>Add Product</Heading>
        <Input type="text" size='lg' value={state.image} placeholder='Image' onChange={(e)=>dispatch({type:"Image",payload:e.target.value})} />
        <Input type="text" size='lg' value={state.title} placeholder='Title' onChange={(e)=>dispatch({type:"Title",payload:e.target.value})} />
        <Input type="text" size='lg' value={state.rating} placeholder='Rating' onChange={(e)=>dispatch({type:"Rating",payload:e.target.value})} />
        <Input type="text" size='lg' value={state.price} placeholder='Price' onChange={(e)=>dispatch({type:"Price",payload:e.target.value})} />
        <Input type="text" size='lg' value={state.selled} placeholder='Selled' onChange={(e)=>dispatch({type:"Selled",payload:e.target.value})} />
        <Button variant={'solid'} onClick={()=>handleSubmit()} colorScheme="green" >Add Item</Button>
        </VStack>
       
       
    </Box>
    <div  style={{width:"75%",marginLeft:"25%"}} >
        <SimpleGrid columns={3} spacing={5} mt="3">
            {data.map((e)=>
            <>
            <div style={{display:"flex",boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
                <img src={e.image} width="100"/>
                <div>
                <div style={{margin:"auto"}}>
                <h3><b>Title:</b> {e.title}</h3>
                <p><b>Rating:</b> {e.rating}</p>
                <p><b>Selled:</b> {e.selled}</p>
                <p><b>Price:</b> {e.price}</p>
                </div>
                <Link to={`/edit/${e.id}`}>
                <Button m={2} colorScheme={"green"}>Edit</Button>
                </Link>
                <Button onClick={()=>handleDelete(e.id)} colorScheme={"red"}>Delete </Button>
                </div>
            </div>
            </>
            )}
        </SimpleGrid>
        
    </div>
   
   
   
    </div>
   
  )
}

export default AdminPaage