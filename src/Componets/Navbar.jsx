import { Box, Button, Flex, Image, useColorModeValue, } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import fse from '../Images/fse.jpg'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai/'
import { BsSearch } from 'react-icons/bs/'
import { BiUserCircle,BiLogIn } from 'react-icons/bi'
import {Search2Icon,} from '@chakra-ui/icons'
import { AuthContext } from '../Context/AuthContextProvider'

const Navbar = () => {
  const [search,setSearch]=useState(false)
    const linkHoverColor = useColorModeValue('teal', 'black');
    const {isAuth}=useContext(AuthContext)

  return (
    <div style={{width:"100%"}} >
    <Box    zIndex={'0'} top='0'bottom={'100px'} border={'1px'} borderColor={'black'} >
        <Box  color="white" bgColor="black" >
            <Flex justifyContent={'space-between'}mr="5" ml="5">
            <Box>
            <Button color={"white"} variant={"link"}>Free shipping on order $50+ and returns all order!</Button>
            </Box>
           <Box>
           <Button color={'blue'} size="sm" bg="black"  variant="solid">SIGN UP FOR CROCS CLUB & GET 15% OFF!</Button>
           <Link to='/login'>
            <Button color={"white"} variant={"link"}>
           {isAuth?<BiUserCircle size={'30px'} />:<BiLogIn size={'30px'} />}
           </Button>
           </Link>
          
           </Box>
            </Flex>
          
            {/* Navbar part */}
            
            <Flex color='black' bg='white' alignItems={'center'}>
               <Link to='/'>
                <Box m='auto' ml='0' mr="3"><Image h="16" src="https://www.crocs.com/on/demandware.static/Sites-crocs_us-Site/-/default/dwcc520068/images/logo-no-tag.svg"/></Box>
                </Link>
                <Link to={'/products'}>
                <Button mr="5" _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>WOMEN</Button>
               
                </Link>
                <Link to={'/products'}>
                <Button mr="5"  _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>MEN</Button>
                </Link>

                <Link to={'/products'}>
                <Button mr="5"  _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>KIDS</Button>
                </Link>

                <Link to={'/products'}>
                <Button mr="5"  _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>JIBBITZ CHARMS</Button>
                </Link>

                <Link to={'/products'}>
                <Button mr="5"  _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>CROCKS AT WORK</Button>
                </Link>

                <Link to={'/products'}>
                <Button mr="5"  _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>SALE</Button>
                </Link>

                <Link to={'/products'}>
                <Button mr="5"  _hover={{color:linkHoverColor}} color={'black'} textDecoration={'none'} variant={'link'}>FETURED</Button>
                </Link>
              
                <Box m='auto' mr={0}  p='0.5' pl='4' >
                  <Flex >           
                     
                  <Button variant={'ooutline'}>
                    <BsSearch onClick={()=>setSearch(!search)} size={'30'}></BsSearch>
                      </Button>
                    </Flex>
                   </Box>
                   <Box m={'auto'} ml='0.5' mr='0' >
                   <Button variant={'ooutline'}>
                    <AiOutlineHeart size={'30'}></AiOutlineHeart>
                      </Button>
                    <Link to='/cart'>
                      <Button variant={'ooutline'}>
                    <AiOutlineShoppingCart size={'30'}></AiOutlineShoppingCart>
                      </Button>
                      </Link>
                   </Box>
               
            </Flex>
            </Box>      
    </Box>
            </div>

  )
}

export default Navbar