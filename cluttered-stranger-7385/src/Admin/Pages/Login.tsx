
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { reqLogin } from '../Redux/action'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN } from '../Redux/actionType'

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector((store: any)=>store.AuthReducer.isAuth)

  console.log(isAuth);
  
  
  const handleLogin =()=>{
    // console.log(username,password);

    reqLogin().then((res)=>{
      
      let filtered = res.data.filter((el : any)=> el.username === username && el.password === password)

      console.log(filtered);

      if(filtered.length>0){

        dispatch({type: LOGIN , payload: username})
        toast({
          title: 'Login Successful !! ',
          description: `Welcome ${filtered[0].username}`,
          status: 'success',
          duration: 4000,
          isClosable: true,
        })

        const obj = {
          isAuth : true,
          username: username
        }
        localStorage.setItem("admin",JSON.stringify(obj))
        navigate(`/Dashboard`)
      }
      else{
        toast({
          title: 'Login Failed !!',
          description: "Please check your Username or Password",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
    })


    
  }


  useEffect(()=>{
    onOpen()
  },[])

  return (
    <>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hello Admin 😃 !!</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input ref={initialRef} placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default Login