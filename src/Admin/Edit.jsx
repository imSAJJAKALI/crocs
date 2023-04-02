import React, { useReducer,useState,useEffect } from 'react'
import { VStack,Heading,Input,Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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

 
 const Edit = () => {
    const val=useParams()
    console.log(val.id)
    const [data,setData]=useState({})
    const {image,title,rating,price,selled}=data
     const [state,dispatch]=useReducer(reducer,initialState)
     useEffect(()=>{
        axios.get(`http://localhost:8080/slippers/${val.id}`)
        .then((res)=>setData(res.data))
     },[])
     
     const handleEdit=()=>{
        //  axios.patch(`http://localhost:8080/slippers/${val.id}`,state)
      
     console.log(state)
     dispatch({type:"reset"})
       
     }
  return (
     
    <VStack shadow='md' borderWidth='1px' mt="3" p="10"  borderRadius={10}>
       
    <Heading size={'lg'}>Add Product</Heading>
     <Input type="text"  value={image} size='lg' placeholder='Image' onChange={(e)=>dispatch({type:"Image",payload:e.target.value})} />
     <Input type="text" value={title} size='lg' placeholder='Title' onChange={(e)=>dispatch({type:"Title",payload:e.target.value})} />
     <Input type="text" value={rating} size='lg'  placeholder='Rating' onChange={(e)=>dispatch({type:"Rating",payload:e.target.value})} />
     <Input type="text" value={price} size='lg' placeholder='Price' onChange={(e)=>dispatch({type:"Price",payload:e.target.value})} />
     <Input type="text" value={selled} size='lg'  placeholder='Selled' onChange={(e)=>dispatch({type:"Selled",payload:e.target.value})} />
     
     <Button variant={'solid'}  onClick={()=>handleEdit()} colorScheme="green" >Save</Button>
     
     </VStack>
  )
}

export default Edit