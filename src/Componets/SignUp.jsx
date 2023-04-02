import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,

} from '@chakra-ui/react';
import { useReducer, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import axios  from 'axios';

const reducer=(state,action)=>{
   switch(action.type){
    case "FirstName":{
      return {
        ...state,
        firstName:action.payload
      }
    }
    case "LastName":{
      return {
        ...state,
        lastName:action.payload
      }
    }
    case "Email":{
      return {
        ...state,
        email:action.payload
      }
    }
    case "Password":{
      return {
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
  firstName:"",
  lastName:"",
  email:"",
  password:""
}

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [state,dispatch]=useReducer(reducer,initialState)

  const handleSubmit=()=>{
   axios.post(`http://localhost:8080/users`,state)
    dispatch({type:'reset'})
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired >
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder='firstName' value={state.firstName} onChange={(e)=>dispatch({type:"FirstName",payload:e.target.value})} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={state.lastName} onChange={(e)=>dispatch({type:"LastName",payload:e.target.value})} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={state.email} onChange={(e)=>dispatch({type:"Email",payload:e.target.value})} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={state.password} onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              onClick={handleSubmit}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?  <Link to='/login' color={'blue.400'}>
                    <Button variant={'link'} color={'blue'} >Login</Button>
                  </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}