import { Box, Button, Center, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Cart = () => {
   const {cartItem,setCartItem}=useContext(AuthContext)
    let price=0
   const [qnt,setQnt]=useState(1)
   const {carItem}=useContext(AuthContext)
  
   
   const handleRemove=(id)=>{
       let removedData=cartItem.filter((e)=>e.id!==id)
       setCartItem(removedData)
    }
    cartItem.map((e)=>price+=(e.price))

useEffect(()=>{
    handleRemove()
},[])

const handlePay=()=>{
    if(cartItem.length==0){
        toast.error('please enter the right creadiential')
    }else{
        toast.success('succes')
    }
}

  return (
    <Box maxW="800px" mx="auto" my="4" mt='50px'>

      <Heading mb="4">Your Cart</Heading>
      <Divider mb="4" />

{ cartItem.length==0?<Center><Heading>Your Cart is Eampty.... </Heading></Center>:""}

      <SimpleGrid columns={[1, 2]} spacing="4">
        {cartItem.map((item)=>
         
          <Flex key={item.id} p="4" shadow="md" borderWidth="1px" borderRadius="md">
            <Image src={item.image} alt="" boxSize="120px" objectFit="contain" />
            <Box flex="1" ml="4">
              <Text fontSize="xl" fontWeight="semibold" mb="2">{item.title}</Text>
              <Text fontSize="lg" mb="2">${item.price}</Text>
              <Text>description</Text>
            </Box>
            <Spacer />
            <Box textAlign="center">
              <Text fontSize="lg" mb="2">quantity</Text>
              <Button size="sm" onClick={()=>setQnt(qnt-1)} >-</Button>
              <Button size="sm" isDisabled={true} >{qnt}</Button>
              <Button size="sm" onClick={()=>setQnt(qnt+1)} >+</Button>
            </Box>
            <Spacer />
            <Box textAlign="right">
              <Text fontSize="lg" mb="2">200</Text>
              <Button size="sm" colorScheme="red" onClick={()=>handleRemove(item.id)} >Remove</Button>
            </Box>
          </Flex>
          
   )}

      </SimpleGrid>
      <Box mt="8">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">Subtotal:</Text>
          <Text fontSize="lg" fontWeight="semibold">{price}</Text>
        </Flex>
        <Flex justify="space-between" mt="2">
          <Text fontSize="lg" fontWeight="semibold">Shipping:</Text>
          <Text fontSize="lg" fontWeight="semibold">{cartItem.length==0?"0":"40"}</Text>
        </Flex>
        <Divider my="4" />
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">Total:</Text>
          <Text fontSize="lg" fontWeight="semibold">{cartItem.length?((price+40)*qnt):"0"}</Text>
        </Flex>
        <Center mt="8">
            <Link to={`/payment`}>
          <Button size="lg" colorScheme="green" onClick={handlePay}>Proceed to Pay</Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default Cart;
