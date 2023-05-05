import { SimpleGrid,Box,Flex,Text ,Heading, HStack, VStack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {CiFacebook,CiInstagram,CiTwitter} from 'react-icons/ci'

const Footer = () => {
  return (
    <Box bg={'black'} position={'absolute'} color='white' mb={'20'} zIndex={'10'}>
       
            <SimpleGrid m='auto' columns={[1, 3, 3, 5]} pt='10'>
                <VStack>
                <Heading size={'md'}>MyAccount</Heading>
              <Link>Order Status</Link>
              <Link>Sign-in & Register</Link>
              <Link>Returns</Link>
                </VStack>

                <VStack>
                <Heading size={'md'}>Shop</Heading>
              <Link>Women</Link>
              <Link>Men</Link>
              <Link>Boys</Link>
              <Link>Girls</Link>
              <Link>Student Offers</Link>
                </VStack>

                <VStack>
                <Heading size={'md'}>Help</Heading>
              <Link>FAQ'S</Link>
              <Link>Return Policy</Link>
              <Link>No Cost EMI</Link>
              <Link>Size Chart</Link>
              <Link>Caring for your Crocs</Link>
                </VStack>

                <VStack>
                <Heading size={'md'}>Shop</Heading>
              <Link>About Crocs</Link>
              <Link>Store Loacator</Link>
              <Link>Compliance Information</Link>
             
                </VStack>
              

                <VStack>
                <Heading  size={'md'}>For online order & delivery related queries</Heading>
                 <Text textAlign={'none'}>Write to: support-in@crocs.in</Text>
                 <Text>Call on: 022-68353126 (MON-SAT : 10 am - 6 pm)</Text>
                 <hr />
                 <Text>Get the latest scoop on new arrivals, sales, special offers and receive 20% off* your next purchase.</Text>

                 <Link><Heading size={'md'}>Subscribe Now</Heading></Link>
                 <br />
                 <p >Stay Connected</p>
                 <HStack>
                    <Link>
                    <CiFacebook size={'3rem'}></CiFacebook>
                    </Link>
                    <Link>
                    <CiInstagram size={'3rem'}></CiInstagram>
                    </Link>
                    <Link>
                    <CiTwitter size={'3rem'}></CiTwitter>
                    </Link>
                 </HStack>
                </VStack>
            </SimpleGrid>
               

           
        {/* </Flex> */}
        <hr />
    </Box>
  )
}

export default Footer