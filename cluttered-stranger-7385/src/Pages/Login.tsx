import { useDispatch, useSelector } from "react-redux"
import { styled } from "styled-components"
// import { initialType } from "../Constraints/Type"
import { RootState } from "../Constraints/Type"
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
    
  } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Link, Navigate} from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from "axios";
const Login = ()=>{
    const login = useSelector((state:RootState)=> state.AuthReducer)

    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    
    console.log(login);
    const dipatch = useDispatch()

    type user={
      username: string;
      password: string;
    }
    

    const [users, setUser] = useState<user[]>([])

    useEffect(()=>{
      

      axios.get("https://cluttered-stranger-backend.onrender.com/users").then((res)=> setUser(res.data)).catch((err)=>{
        console.log(err);
      })
    },[])
    console.log(users);

   const handleLogin =() =>{
    let check: boolean = false

    if(email === "" || password === ""){
      toast.warn('please enter you details', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{

      users.forEach((el)=>{
        if(el.username === email && el.password === password){
          check = true
        }
        
      })
      if(check){
        toast.success("✔ Login Seccussfully");
      }
      else{
        toast.warn('Please Check Credentials !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

    }


   }
  
    // console.log(login.AuthReducer);
    return <DIV>
    
    <Flex
        // minH={'100vh'}
        // align={'center'}
        // justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        >  
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          <Box height={"5"}></Box>
            <Heading fontSize={'4xl'}>Login into your Account</Heading>
           
           
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            {/* size='10px' */}
              <ToastContainer />
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email}  onChange={(e)=> setEmail(e.target.value) } />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox >Remember me</Checkbox>
                  {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                </Stack>
                <Button
                  bg={'#5c6bc0'}
                  color={'white'}
                  _hover={{
                    bg: '#283593',
                  }}
                  onClick={handleLogin}
                  >
                  Log-in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Register ? 
                  
                  <Link to='/signup' color={'#283593'}>
                    <Button variant={'link'} >SignUp</Button>
                  </Link>

                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </DIV>
}

export default Login;

const DIV = styled.div`
/* margin-top: 100px; */
padding: 100px;

`


 /* background-color: #5c6bc0; */
 /* background-color: #283593;  button */