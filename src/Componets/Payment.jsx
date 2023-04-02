import { Heading, Text, Box, Flex, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function PaymentPage() {
  
    const [cardnum,setCardnum]=useState("")
    const [CardName,setCardName]=useState("")
    const [date,setCardate]=useState("")
    const [py,setPy]=useState(false)

    // const HandleClick=()=>{


    //     if(CardName.length==""||cardnum.length==""||date.length==""){
    //         toast.error("❌ Please Enter Details")

    //     }
    //     else if(CardName.length==""||cardnum.length==""||date.length==""){
    //         toast.error("❌ Please Enter The Required Fileds")
    //     }
    //     else {
    //         toast.success('✅ Payment Successful')
           
    //  }
    // }


const HandleClick=()=>{
   setPy(true)
}

if(py){
    return <Navigate to="/"></Navigate>
}



  return (
    <Flex direction="column" alignItems="center" justifyContent="center" h="100vh">
      <Box maxW="lg" px={8} py={12} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6}>Payment Details</Heading>
        <Stack spacing={4}>
          <Box>
            <Text mb={2}>Cardholder Name</Text>
            <input   type="text" placeholder="Enter your name" />
          </Box>
          <Box>
            <Text mb={2}>Card Number</Text>
            <input type="text"  placeholder="0000 0000 0000 0000" />
          </Box>
          <Flex justify="space-between">
            <Box mr={4} flex={1}>
              <Text mb={2}>Expiration Date</Text>
              <input type="text"  placeholder="MM/YY" />
              
            </Box>
            <Box ml={4} flex={1}>
              <Text mb={2}>CVV</Text>
              <input type="text" maxLength={3} placeholder="123" />
            </Box>
          </Flex>
          <Button colorScheme="blue" size="lg" onClick={HandleClick}>
            Pay Now
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default PaymentPage;