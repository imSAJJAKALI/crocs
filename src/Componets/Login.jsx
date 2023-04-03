import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
 
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useReducer, useState } from 'react';

  import {Link, Navigate} from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContextProvider';

  const reducer=(state,action)=>{
    switch(action.type){
      case "Email":{
        return{
          ...state,
          email:action.payload
        }
      }
      case "Password":{
        return{
          ...state,
          password:action.payload
        }
      }
      case "reset":{
        return initialState
       
      }
      default :{
        return state
      }
    }
  }

  const initialState={
    email:"",
    password:""
  }
  
  export default function Login() {
    const {isAuth,setIsAuth}=useContext(AuthContext)
    const [state,dispatch]=useReducer(reducer,initialState)
    const [home,setHome]=useState(false)

    const fetchData=async ()=>{
      try {
       await fetch(`http://localhost:8080/users`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
            }).then((res)=>res.json())
            .then((data)=>{
              data.filter((e)=>{
                if(state.email==""&&state.password==""){
                  toast.error('please enter the right creadiential')
                }else if(state.email!=e.email && state.pasword!=e.password){
                  toast.error('plz check your email or password')
                }else if(state.email==e.email&&state.password==e.password){
                  setHome(true)
                  toast.success('✔ successfully login')
                 setIsAuth(true)
                
                }
          })
        })
      } catch (error) {
        
      }
    }

   const handleLogin=()=>{
    fetchData()

    dispatch({type:'reset'})
  }
  
  if(home){
    return <Navigate to='/'/>
  }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        >
          
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login into your Account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
           
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <ToastContainer size='10px'/>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>dispatch({type:"Email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}
                  >
                  Log-in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Register ? 
                  
                  <Link to='/signup' color={'blue.400'}>
                    <Button variant={'link'} >SignUp</Button>
                  </Link>
                 
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }