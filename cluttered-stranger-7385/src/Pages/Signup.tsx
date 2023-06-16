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
 } from "@chakra-ui/react";
 import { useReducer, useState } from "react";
 import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
 import { Link, useNavigate } from "react-router-dom";
 import axios from "axios";
 import { ToastContainer, toast } from "react-toastify";
 

 
 export default function SignupCard() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const [fistName,setFirstName] = useState<string>("")
    const [lastName,setLastName] = useState<string>("")

    const navigate = useNavigate();
    const handleSubmit = () => {
    //    e.preventDefault();
    //    console.log(state);
    //    axios.post(`https://json-example.onrender.com/user`, state);
    console.log(email,password);
    //    toast.success("Your Account is Created");
    };
 
    return (
       <Flex
          padding={"50px 10px"}
          border-radius={"5px"}
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          width={"70%"}
          margin={"auto"}
          box-shadow={
             "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
          }
       >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
             <Stack align={"center"}>
                <Box height={"5"}></Box>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                   Sign up
                </Heading>
                <Text fontSize={"lg"}>to enjoy all of our cool features ✌️</Text>
             </Stack>
             <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
             >
                <Stack
                   spacing={4}
                   box-shadow={
                      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                   }
                >
                   <HStack>
                      <Box>
                         <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input
                               type="text"
                               placeholder="Enter FirstName"
                               value={fistName}
                               onChange={(e) =>
                                  setFirstName(e.target.value)
                               }
                            />
                         </FormControl>
                      </Box>
                      <Box>
                         <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input
                               type="text"
                               value={lastName}
                               placeholder="Enter LastName"
                               onChange={(e) =>
                                  setLastName(e.target.value)
                               }
                            />
                         </FormControl>
                      </Box>
                   </HStack>
                   <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                         type="email"
                         value={email}
                         placeholder="Enter Email Address"
                         onChange={(e) =>
                            setEmail(e.target.value)
                         }
                      />
                   </FormControl>
                   <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                         <Input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) =>
                               setPassword(e.target.value)
                            }
                         />
                         <InputRightElement h={"full"}>
                            <Button
                               variant={"ghost"}
                               onClick={() =>
                                  setShowPassword(
                                     (showPassword) => !showPassword
                                  )
                               }
                            >
                               {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                         </InputRightElement>
                      </InputGroup>
                   </FormControl>
                   <Stack spacing={10} pt={2}>
                      <Button
                         loadingText="Submitting"
                         size="lg"
                         bg={"#5c6bc0"}
                         color={"white"}
                         _hover={{
                            bg: "#283593",
                         }}
                         onClick={handleSubmit}
                      >
                         Sign up
                      </Button>
                   </Stack>
                   <Stack pt={6}>
                      <Text align={"center"} textDecor={"ButtonHighlight"}>
                         Already a user?
                         {/* <Link to='/login' color={'blue.400'}> */}
                         <Button
                            bg={"#5c6bc0"}
                            color={"white"}
                            _hover={{
                               bg: "#283593",
                            }}
                            padding={"10px"}
                            margin={"10px"}
                            width={"100px"}
                            onClick={() => {
                               navigate("/login");
                            }}
                         >
                            Login
                         </Button>
                      </Text>
                   </Stack>
                </Stack>
             </Box>
          </Stack>
       </Flex>
    );
 }